module.exports = app => {
    const users = require('../controllers/user.controller.js'); // Database connects and uses model
    const userRouter = require('express').Router();
    
    // Routes

    app.use('/users', userRouter);
}