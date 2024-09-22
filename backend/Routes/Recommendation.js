// routes/recommendation.js
const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const Hotel = require('../Models/Hotel');

// Recommend hotels based on user activities
router.get('/recommend/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('visitedHotels draftBookings completedBookings');
  
  // Get recommended hotels based on user activity
  let recommendedHotels = await Hotel.find({
    _id: { $nin: [...user.visitedHotels, ...user.draftBookings, ...user.completedBookings] }
  });
  
  res.json(recommendedHotels);
});

module.exports = router;
