'use strict';

var _ = require('lodash');
var Rsvp = require('./rsvp.model');

// Creates a new rsvp in the DB.
exports.upsert = function(req, res) {
    var model = {
        name: req.body.name,
        email: req.body.email,
        party: req.body.party, 
        guests: req.body.guests,
        attending: req.body.attending,
    };
  Rsvp.findOneAndUpdate( {name : req.body.name}, model,{upsert : true, new : true}, function(err, rsvp) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(rsvp);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}