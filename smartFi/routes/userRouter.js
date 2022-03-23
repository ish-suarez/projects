const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');

// Get all users
userRouter.get('/', (req, res, next) => {
    User.find((err, user) => err ? res.status(500) && next(err) : res.status(200).send(user));
})

// Search by term
userRouter.get('/search', (req, res, next) => {
    const {username} = req.query;
    const pattern = new RegExp(username);
    User.find({name: {$regex: pattern, $options: 'i'}}, (err, user) => {
        if(err) {
            res.status(500)
            next(err)
        } else {
            res.status(200).send(user)
        }
    })
})

// Get By Id
userRouter.get('/:userId', (req, res, next) => {
    User.findById(req.params.userId, (err, user) => {
        if(err){
            res.status(500)
            next(err)
        } else {
            res.status(200).send(user.withoutPassword())
        }
    })
})

// Add New user
userRouter.post('/', (req, res, next) => {
    const newUser = new User(req.body)
    User.create(newUser, (err, savedUser) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

// Delete user 
userRouter.delete('/:userId', (req, res, next) => {
    User.findByIdAndDelete({_id: req.params.userId}, (err, deletedUser) => {
        if(err){
            res.status(500)
            return next(err)
        } else {
            res.status(200).send(deletedUser)
        }
    })
})

// Update user 
userRouter.put('/:userId', (req, res, next) => {
    User.findOneAndUpdate(
        {_id: req.params.userId},
        req.body, 
        {new: true},
        (err, updatedUser) => err ? res.status(500) && next(err) : res.status(201).send(updatedUser.withoutPassword()),
    );
})

module.exports = userRouter;