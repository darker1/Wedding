'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmailSchema = new Schema({
  name: String,
  email_address: String
});

module.exports = mongoose.model('Email', EmailSchema);