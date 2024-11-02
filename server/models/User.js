// models/User.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,  // Automatically lowercase emails
    },
    password: {
        type: String,
        required: true,
    }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
