// db.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://farihazamannishat:nishat1234@cluster0.tcxcl1g.mongodb.net/MonerMotonDB?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    try {
        const startTime = new Date();

        await mongoose.connect(mongoURI, {});

        const endTime = new Date();
        console.log('Time taken to establish connection:', endTime - startTime, 'ms');

        const db = mongoose.connection;

        db.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        db.once('open', () => {
            console.log('Connected to MongoDB');

            const fetchDataStartTime = new Date();
            const fetched_data = mongoose.connection.db.collection("food_items");

            fetched_data.find({}).toArray((err, data) => {
                const fetchDataEndTime = new Date();
                console.log('Time taken to fetch data:', fetchDataEndTime - fetchDataStartTime, 'ms');
                
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            });
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongoDB;


