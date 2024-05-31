// routes/authRoutes.js

const express = require('express');
const { registerDriver, loginDriver, logoutDriver } = require('../controllers/driverAuthController');

const router = express.Router();

// Routes for user authentication
router.post('/register', registerDriver);
router.post('/login', loginDriver);
router.get('/logout', logoutDriver);

module.exports = router;
