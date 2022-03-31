const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicates = (req, res, next) => {
    const {username, email} = req.body; // User info Variable
    // Username search 
    User.findOne({ where: username }).then(user => {
        if(user) {
            res.status(400).send({message: 'Failed! Username is already in use!'});
            return;
        }
        // Email
        User.findOne({where: email}).then(user => {
            if(user) {
                res.status(400).send({message: 'Failed! Email is already taken!'});
                return;
            }
            next();
        });
    });
};
// Role existence
checkRolesExisted = (req, res, next) => {
    const {roles} = req.body; // Role variable
    if (roles) {
        for (let i = 0; i < roles.length; i++) {
            if (!ROLES.includes(roles[i])) {
            res.status(400).send({
                message: "Failed! Role does not exist = " + roles[i]
            });
            return;
        }
    }}
    next();
}

const verifySignUp = {checkDuplicates, checkRolesExisted} 

module.exports = verifySignUp;