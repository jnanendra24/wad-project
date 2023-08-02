const mongoose = require('mongoose')

//create Schema
const Schema = mongoose.Schema;
const placeSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

//create model
const Place = mongoose.model('Place',placeSchema);

module.exports =  Place;