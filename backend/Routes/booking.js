// routes/booking.js
const express = require('express');
const router = express.Router();
const Booking = require('../Models/booking');
const Hotel = require('../Models/Hotel');
const User = require('../Models/User');

// Create a draft booking
router.post('/draft', async (req, res) => {
  const { hotelId, userId } = req.body;
  const booking = new Booking({ hotel: hotelId, user: userId, status: 'Draft' });
  await booking.save();
  
  // Increment draft booking count
  const hotel = await Hotel.findById(hotelId);
  hotel.draftBookings += 1;
  await hotel.save();
  
  res.json(booking);
});

// Complete a booking
router.post('/complete', async (req, res) => {
  const { bookingId } = req.body;
  const booking = await Booking.findById(bookingId);
  booking.status = 'Completed';
  await booking.save();
  
  // Update completed bookings
  const hotel = await Hotel.findById(booking.hotel);
  hotel.completedBookings += 1;
  await hotel.save();
  
  res.json(booking);
});

module.exports = router;
