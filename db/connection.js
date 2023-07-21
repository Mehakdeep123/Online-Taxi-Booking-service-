const mongoose = require('mongoose');

console.log('in mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/taxi-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    });