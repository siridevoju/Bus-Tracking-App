const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Driver = require('../models/Driver');

// Register a driver
const registerDriver = async (req, res) => {
    try {
        const { username, email, password, busRouteNo } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const driver = new Driver({ username, email, password: hashedPassword, busRouteNo });
        await driver.save();
        res.status(201).json({ message: 'Driver registered successfully' });
    } catch (error) {
        console.error('Error registering driver:', error);
        res.status(500).json({ message: 'Error registering driver' });
    }
};

// Login a driver
const loginDriver = async (req, res) => {
    try {
        const { email, password } = req.body;
        const driver = await Driver.findOne({ email });

        if (!driver) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, driver.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ driverId: driver._id }, 'secretkey');
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in driver:', error);
        res.status(500).json({ message: 'Error logging in driver' });
    }
};

// Logout a driver
const logoutDriver = async (req, res) => {
    try {
        // Perform any logout actions if necessary
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out driver:', error);
        res.status(500).json({ message: 'Error logging out driver' });
    }
};

module.exports = {
    registerDriver,
    loginDriver,
    logoutDriver,
};
