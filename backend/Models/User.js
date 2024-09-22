// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  visitedHotels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
  draftBookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
  completedBookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }]
});

module.exports = mongoose.model('User', userSchema);
