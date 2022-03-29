module.exports = app => {
    const users = require('../controllers/user.controller.js'); // Database connects and uses model
    const userRouter = require('express').Router();
    
    // Routes
    userRouter.post('/', users.create); // Create a New User
    userRouter.get('/', users.findAll); // Get All Users
    userRouter.get('/:id')
    app.use('/users', userRouter);
}