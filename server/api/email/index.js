'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.upsert);

module.exports = router;