'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RsvpSchema = new Schema({
  name: String,
  email: String,
  party: String,
  guests: Number,
  attending: Boolean
});

module.exports = mongoose.model('Rsvp', RsvpSchema);