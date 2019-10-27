let mongoose = require('mongoose');

let TestSchema = new mongoose.Schema({
        name: String,
        testername: String,
        testdate: Date,
        grade:{type: Number, default: 0}
    },
    { collection: 'test' });

module.exports = mongoose.model('Test', TestSchema);