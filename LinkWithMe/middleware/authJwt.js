const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if(!token) return res.status(403).send({message: 'No token provided!'}); // If Token is not there
    jwt.verify(token, process.env.SECRET_TOKEN, (err, data) => {
        if (err) return res.status(401).send({message: 'Unauthorized'});
        req.userId = data.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    const {userId} = req.body;
    User.findByPk(userId).then( user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({message: 'Require Admin Role!'});
            return;
        });
    });
};

isModerator = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }
            }
            res.status(403).send({message: "Require Moderator Role!"});
        });
    });
};

isModeratorOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "moderator") {
                    next();
                    return;
                }
                if (roles[i].name === "admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({message: "Require Moderator or Admin Role!"});
        });
    });
};

const authJwt = {verifyToken, isAdmin, isModerator, isModeratorOrAdmin};

module.exports = authJwt;