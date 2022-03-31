const db = require('../models');
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { user } = require('../models');

exports.signup = (req, res) => {
    const {username, email, password, roles} = req.body;
    // Save New User To Database
    User.create({username, email, password: bcrypt.hashSync(password, 8)})
        .then( user => {
            if (roles) {
                Role.findAll({where: {name: {[Op.or]: roles}}});
            } else {
                // user role = 1
                user.setRoles([1]).then(() => res.send({message: 'User was registered successfully!'}));
            }
        })
        .catch(err => res.status(500).send({message: err.message}));
};

exports.signin = (req, res) => {
    const {username, password} = req.body;
    User.findOne({where: username}).then(user => {
        if(!user) return res.status(404).send({message: 'User not found.'});
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword) return res.status(401).send({accessToken: null, message: 'Invalid Password'});

        const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: 86400}); // Expires in 24 hours
        let authorities = [];
        user.getRoles().then(roles => {
            for (i = 0; i < roles.length; i++) {
                authorities.push('ROLE_' + roles[i].name.toUpperCase());
            }
            res.status(200).send({id: user.id, username: user.username, email: user.email, roles: authorities, accessToken: token});
        });
    })
    .catch(err => res.status(500).send({message: err.message}));
};