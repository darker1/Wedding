'use strict';

var _ = require('lodash');
var Email = require('./email.model');

// Get list of emails
exports.index = function(req, res) {
  Email.find(function (err, emails) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(emails);
  });
};


// Creates a new email in the DB.
exports.upsert = function(req, res) {
  Email.findOneAndUpdate({ email : req.body.email }, {name : req.body.name}, {upsert : true, new : true}, function(err, emailEntry){
     if(err) { return handleError(res, err); }
    return res.status(201).json(emailEntry);
  });
};


function handleError(res, err) {
  return res.status(500).send(err);
}