const express = require('express');
const accountRouter = express.Router();
const Account = require('../models/Account');

accountRouter.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// Get All Accounts
accountRouter.get('/', (req, res) => Account.find((err, account) => err ?  res.status(500) && next() : res.status(200).send(account)))

// Get By Id
accountRouter.get('/:accountId', (req, res, next) => {
    Account.findById({_id: req.params.accountId}, (err, account) => {
        if (err) return res.status(500);
        next(err);
        return res.status(200).send(account);
    })
})

// Search by term
accountRouter.get('/search', (req, res, next) => {
    const {nickname} = req.query;
    const pattern = new RegExp(nickname);
    User.find({name: {$regex: pattern, $options: 'i'}}, (err, account) => {
        if(err) {
            res.status(500)
            next(err)
        } else {
            res.status(200).send(account)
        }
    })
})

// Add A New Account
accountRouter.post('/', (req, res, next) => {
    const newAccount = new Account(req.body);
    Account.create(newAccount, (err, savedAccount) => {
        if(err) return res.status(500);
        next(err);
        return res.status(201).send(savedAccount);
    })
})

// Delete Account
accountRouter.delete('/:accountId', (req, res, next) => {
    const _id = req.body.accountId;
    Account.findOneAndDelete(_id, (err, deletedAccount) => {
        err ? res.status(500) && next(err) : res.status(200).send(deletedAccount);
    })
})

// Update Account 
accountRouter.put('/:accountId', (req, res, next) => {
    const id = req.params.accountId;
    const updates = req.body;
    Account.findOneAndUpdate(
        {_id: id},
        updates,
        {new: true},
        (err, updatedAccount) => err ? res.status(500) && next(err) : res.status(201).send(updatedAccount)
    )
})

module.exports = accountRouter;
