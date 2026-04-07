const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');
const auth = require('./middleware/auth.js');

const app = express();

app.get('/user/login', (req, res) => {
    res.send("User logged in successfully");
});

app.get('/user/profile', auth, (req, res) => {
    res.send("User profile fetched successfully");
});

connectDB()
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000...');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    });