'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema');

/**
 * Create/Update an Item
 */
exports.findItem = function(req, res) {
    console.log("Inside getItems by expiry");
    try {
        console.log(req.body);
        var item = new ItemSchema(req.body);
        var query = {'id':req.body.id};
        console.log(item);

        ItemSchema.find(query).exec(
            function(err, doc){
                if (err) return res.send(500, { error: err });
                return res.jsonp(doc);
            });
    }
    catch(error) {
        console.log(error);
    }

};
