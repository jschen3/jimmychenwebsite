'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema');

/**
 * Create/Update an Item
 */
exports.findAllItems = function(req, res) {
    console.log("Inside getItems ");
    try {
        console.log(req.body);
        var item = new ItemSchema(req.body);

        console.log(item);

        ItemSchema.find({}).exec(
            function(err, doc){
                if (err) return res.send(500, { error: err });
                return res.jsonp(doc);
            });
    }
    catch(error) {
        console.log(error);
    }

};
