'use strict';

/**
 * Module dependencies.
 */

var item = require('../model/item')
var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema');

/**
 * Create an Bucket List
 */
exports.create = function(req, res) {
    console.log("Inside item create");
    try {
        console.log(req.body);
        var item = new ItemSchema(req.body);

        console.log(item);
        item.save(function(err) {
            console.log("inside save item ");
            if (err) {
                console.log(err);
            } else {
                res.jsonp(item);
            }
        });
    }
    catch(error) {
        console.log(error);
    }

};
