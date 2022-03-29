const Users = require('../models/User');

// Create a New User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    // Create a user
    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    // Save User in the database
    Users.create(user, (err, data) => {
        if (err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
        });
        else res.send(data);    
    });
};

// Get all Users
exports.findAll = (req, res) => {
    const username = req.query.username;
    Users.getAll(username, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

// Get By Id
exports.findOne = (req, res) => {
    const _id = req.params.id
    Users.findById( _id, (err, data) => {
        if (err) {
            if(err.kind === 'not_found') {
                res.status(404).send({message: `User Not Found With id: ${_id}`});
            } else {
                res.status(500).send({message: `Error Retrieving User with id: ${_id}`});
            } 
        } else res.send(data);
    }); 
};

// Update User
exports.update = (req, res) => {

    if (!req.body) res.status(400).send({message: 'Content can not be empty.'}); // Validating the request 
    console.log(req.body);
    const user = req.body; // User Variable
    const id = req.params.id; // Id variable from params
    // Setting Updates
    Users.updateById( id, new Users(user), (err, data) => {
        if (err) {
            if (err === 'not_found') {
                res.status(404).send({message: `User not found with id:  ${id}`});
            } else {
                res.status(500).send({message: `Err updating User with id: ${id}`});
            }
        } else res.send(data);
    })
}