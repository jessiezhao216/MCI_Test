let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        email: String,
        gender: String,
        age: Number,
        medical_history: String
    },
    { collection: 'user' });

module.exports = mongoose.model('User', UserSchema);