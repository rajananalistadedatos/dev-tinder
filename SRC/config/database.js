const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('MONGODB_URI is missing. Add it in your .env file.');
    }
    await mongoose.connect(uri);
};

module.exports = connectDB;

