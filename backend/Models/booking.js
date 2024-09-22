// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['Draft', 'Completed'], default: 'Draft' },
  date: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
