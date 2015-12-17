'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RsvpSchema = new Schema({
  name: String,
  email: String,
  phone: String, 
  party: [String],
  numberOfGuests: Number,
  active: Boolean
});

module.exports = mongoose.model('Rsvp', RsvpSchema);