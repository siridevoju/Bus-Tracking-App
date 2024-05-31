const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const driverAuthRoutes = require('./routes/driverAuthRoutes');
const cors = require('cors');
const Driver = require('./models/Driver')
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

mongoose.connect('mongodb://localhost:27017/bus_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth/user', authRoutes);
app.use('/api/auth/driver', driverAuthRoutes);
app.listen(1234, () => console.log(`Server started on port ${1234}`));
