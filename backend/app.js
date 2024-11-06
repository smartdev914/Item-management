// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Routes
app.use('/', itemRoutes);

module.exports = app;
