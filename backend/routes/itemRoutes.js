// routes/itemRoutes.js
const express = require('express');
const { getItems, addItem } = require('../controllers/itemController');

const router = express.Router();

router.get('/items', getItems);
router.post('/addItems', addItem);

module.exports = router;
