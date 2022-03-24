const {Schema, model, models} = require('mongoose');
const Address = require('./Address');

const Profile = new Schema({
    firstName: {type: String, default: '' },
    lastName: { type: String, default: '' },
    phone: { type: String, default: '' },
    avatar: {type: String, default: ''},
    address: {type: Schema.Types.ObjectId, ref: Address}
});

module.exports = models.Profile || model('Profile', Profile);