/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Email = require('../api/email/email.model');
var User = require('../api/user/user.model');

Email.find({}).remove(function() {

});
