const {Schema, model, models} = require('mongoose');
const Point = require('./Point');

const Address = new Schema({
    street1: { type: String, default: '' },
    street2: { type: String, default: 'Optional' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    county: { type: String, default: '' },
    zip: { type: String, default: '' },
    location: {type: Schema.Types.ObjectId, ref: Point}
});

module.exports = models.Address || model('Address', Address);