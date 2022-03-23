const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');


// Sign up
authRouter.post('/signup', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        if(user) {
            res.status(403);
            return next(new Error('Username Already Exists'));
        }
        const newUser = new User(req.body);
        User.create(newUser, (err, savedUser) => {
            if(err) {
                res.status(500);
                return next(err);
            }
            savedUser.generateAccessToken();
            return res.status(201).send({user: savedUser.withoutPassword()});
        });
    });
});


// Log In
authRouter.post('/login', (req, res, next) => {
    const failedLogin = 'Account does not match an existing user';
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        if(!user) {
            res.status(403);
            return next(new Error(failedLogin));
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(403)
                return next(new Error(failedLogin))
            }
            if(!isMatch) {
                res.status(403)
                return next(new Error(failedLogin))
            }
            
            const token = user.generateAccessToken();
            return res.status(200).send({token, user: user.withoutPassword()})
        })
    })
})

// LogOut
authRouter.put('/logout/:userId', (req, res, next) => {
    const deleteToken = {token: ''}
    User.findOneAndUpdate(
        {_id: req.params.userId},
        deleteToken, 
        {new: true},
        (err, updatedUser) => err ? res.status(500) && next(err) : res.status(201).send(updatedUser)
    );
})


module.exports = authRouter;