const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://farihazamannishat:nishat1234@cluster0.tcxcl1g.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = () => {
    mongoose.connect(mongoURI);

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
}

module.exports = mongoDB;
