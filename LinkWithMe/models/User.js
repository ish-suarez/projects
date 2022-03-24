const {Schema, model, models} = require('mongoose');
const bcrypt = require('bcrypt');
const Profile = require('./Profile');
const InkIt = require('./InkIt');

const User = new Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "Can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    password: {type: String, required: true, validate(value) {
        if(value.toLowerCase().includes('password')) {
            throw new Error('Password cannot be the word `password`')
        }
    }},
    email: {type: String, lowercase: true, required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'] },
    profile: {type: Schema.Types.ObjectId, ref: Profile},
    posts: [{type: Schema.Types.ObjectId, ref: InkIt}],
},{timestamps:true})

User.pre('save', {document: true, query: false}, function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    user.password = bcrypt.hashSync(user.password, 19);
    next();
});

User.methods.checkPassword = function(plaintext, callback) {
    const user = this;
    return callback(null, bcrypt.compareSync(plaintext, user.password));
}

User.methods.withoutPassword = function() {
    const user = this;
    delete user.password;
    return user;
}

module.exports = models.User || model('User', User);