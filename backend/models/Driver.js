const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    busRouteNo: {
        type: String,
        required: true,
        trim: true
    },
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
