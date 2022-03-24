const {Schema, model, models} = require('mongoose');

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

module.exports = models.Point || model('Point', Point);