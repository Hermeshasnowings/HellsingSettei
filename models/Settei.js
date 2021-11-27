const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SetteiSchema = new Schema({
    title: String,
    tags: String,
    imageURL: String,
    description: String
},
    { typeKey: '$type' });

module.exports = mongoose.model('Settei', SetteiSchema);