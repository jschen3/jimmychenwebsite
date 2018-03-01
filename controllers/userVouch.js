'use strict';

/**
 * Module dependencies.
 */

var deal = require('../model/deal')
var mongoose = require('mongoose'),
DealSchema = mongoose.model('DealSchema');

/**
 * Create an Bucket List
 */
exports.create = function(req, res) {
  console.log("Inside deal create");
  try {
    var dealSchema = new DealSchema(req.body);
    console.log(req.body);
    dealSchema.save(function(err) {
        console.log("inside save deal ");
        if (err) {
            console.log(err);
        } else {
            res.jsonp(dealSchema);
        }
    });
  }
  catch(error) {
    console.log(error);
  }

};
