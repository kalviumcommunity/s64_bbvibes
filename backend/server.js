require('dotenv').config();
const express = require('express');
const connectDatabase = require('./database');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

// Connect to MongoDB before handling requests
connectDatabase();

// Ping Route
app.get('/ping', (req, res) => {
    try {
        res.send('pong');
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

// Home Route - Check Database Connection Status
app.get('/', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected';
    res.json({ database_status: dbStatus });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
