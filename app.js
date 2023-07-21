const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
const route = require('./server');
const app = express();
const PORT = 3000; // You can use any port you prefer
const staticPath = path.join(__dirname,"/");

app.use(express.static(staticPath));

// Parse incoming data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./db/connection');
app.use('/api', route);
// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});