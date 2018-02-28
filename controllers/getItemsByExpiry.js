'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema');

/**
 * Create/Update an Item
 */
exports.find = function(req, res) {
    console.log("Inside getItems by expiry");
    try {
        console.log(req.body);
        var item = new ItemSchema(req.body);

        console.log(item);

        ItemSchema.find({}).sort('voucher_expiration').exec(
            function(err, doc){
                if (err) return res.send(500, { error: err });
                return res.jsonp(doc);
            });
    }
    catch(error) {
        console.log(error);
    }

};
