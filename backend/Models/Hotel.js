// models/Hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  price: Number,
  visits: { type: Number, default: 0 },
  draftBookings: { type: Number, default: 0 },
  completedBookings: { type: Number, default: 0 },
});

module.exports = mongoose.model('Hotel', hotelSchema);
