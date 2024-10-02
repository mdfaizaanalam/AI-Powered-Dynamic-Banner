const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bannerRoutes = require('./routes/banner');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection (updated)
mongoose.connect('mongodb://localhost:27017/dynamic-banner')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/api/banners', bannerRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Welcome to AI-Powered Dynamic Banner Generator!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
