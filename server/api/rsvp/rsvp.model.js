'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RsvpSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Rsvp', RsvpSchema);