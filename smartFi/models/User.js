const {Schema, model, models} = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');


const Point = new Schema({
    type: { 
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const Address = new Schema({
    street1: { type: String, default: '' },
    street2: { type: String, default: 'Optional' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    county: { type: String, default: '' },
    zip: { type: String, default: '' },
    location: {
        type: Point,
        required: false
    }
})

const Checking = new Schema({
    nickname: { type: String, default: '' },
    balance: { type: Number, default: 0 }
})

const Savings = new Schema({
    nickname: { type: String, default: '' },
    balance: { type: Number, default: 0 }
})

const Account = new Schema({
    holder: { type: Schema.Types.ObjectId, ref: 'User' },
    checking: { type: Checking, default: {} },
    saving: { type: Savings, default: {} }
})

const Profile = new Schema({
    firstName: {type: String, default: '' },
    lastName: { type: String, default: '' },
    phone: { type: String, default: '' },
    avatar: String,
    address: { type: Address, default: {} }
})

const User = new Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "Can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    password: {type: String, required: true, validate(value) {
        if(value.toLowerCase().includes('password')) {
            throw new Error('Password cannot be the word `password`')
        }
    }},
    email: {type: String, lowercase: true, required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'] },
    accounts: {type: Account, default: {} },
    profile: {type: Profile, default: {} },
    token: { type: String, default: '' },
    active: {type: Boolean, default: true },

},{timestamps:true});


User.plugin(uniqueValidator, {message: 'is already taken.'});

User.pre('save', {document: true, query: false}, function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    user.password = bcrypt.hashSync(user.password, 10);
    next()
});

User.methods.checkPassword = function(plaintext, callback) {
    const user = this;
    return callback(null, bcrypt.compareSync(plaintext, user.password));
};

User.methods.withoutPassword = function(){
    const user = this.toObject();
    delete user.password;
    return user;
}

User.methods.generateAccessToken = function() {
    const user = this;
    const token = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET)

    user.token = token;
    user.save()
    return token
}

User.methods.deleteToken = function() {
    const user = this;
    
    user.token ='';
    user.save();
    return user;
}

module.exports = models.User || model('User', User);