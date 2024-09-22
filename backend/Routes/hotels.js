// routes/hotel.js
const express = require('express');
const router = express.Router();
const Hotel = require('../Models/Hotel');

// Get all hotels
router.get('/', async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// Get hotel by ID
router.get('/:id', async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  res.json(hotel);
});

// Create a new hotel
router.post('/', async (req, res) => {
  const hotel = new Hotel(req.body);
  await hotel.save();
  res.json(hotel);
});

module.exports = router;
