const express = require('express');
const mongoose = require('mongoose');
const app = express.Router();





const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    service: { type: String, required: true },
    phone: { type: Number, required: true },
    passengers: { type: Number, required: true },
    soj: { type: Date, required: true },
    eoj: { type: Date, required: true },
    ppoint: { type: String, required: true },
    dpoint: { type: String, required: true },
    message: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


app.post('/submit', (req, res) => {
    const { name, service, phone, passengers, soj, eoj, ppoint, dpoint, message } = req.body;
    console.log('in post route')
    console.log(req.body);

    const newUser = new User({
        name,
        service,
        phone,
        passengers,
        soj,
        eoj,
        ppoint,
        dpoint,
        message,

    });

    newUser.save()
        .then(() => {
            console.log('User saved to the database:', newUser);

            res.redirect("/thankyou.html");
        })
        .catch((err) => {
            console.error('Error saving user to the database:', err);
            res.status(500).send('Error submitting the form.');
        });
});

module.exports = app;