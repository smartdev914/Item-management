// controllers/itemController.js
const Item = require('../models/itemModel');

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve items' });
  }
};

const addItem = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Item name is required' });
    }
    const newItem = await Item.create({ name });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item' });
  }
};

module.exports = { getItems, addItem };
