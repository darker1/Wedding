'use strict';

var express = require('express');
var controller = require('./rsvp.controller');

var router = express.Router();

router.post('/', controller.upsert);

module.exports = router;