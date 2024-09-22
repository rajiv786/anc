const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const Hotel = require('../Models/Hotel');

// Create user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Track user hotel visit
router.post('/:id/visit', async (req, res) => {
  const user = await User.findById(req.params.id);
  const hotel = await Hotel.findById(req.body.hotelId);
  user.visitedHotels.push(hotel._id);
  await user.save();
  res.json(user);
});

// Track user draft booking
router.post('/:id/draft-booking', async (req, res) => {
  const user = await User.findById(req.params.id);
  const hotel = await Hotel.findById(req.body.hotelId);
  user.draftBookings.push(hotel._id);
  await user.save();
  res.json(user);
});

// Track user completed booking
router.post('/:id/complete-booking', async (req, res) => {
  const user = await User.findById(req.params.id);
  const hotel = await Hotel.findById(req.body.hotelId);
  user.completedBookings.push(hotel._id);
  await user.save();
  res.json(user);
});

module.exports = router;
