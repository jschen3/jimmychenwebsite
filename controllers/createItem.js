'use strict';

/**
 * Module dependencies.
 */

var item = require('../model/item')
var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema');

/**
 * Create/Update an Item
 */
exports.create = function(req, res) {
    console.log("Inside item create");
    try {
        console.log(req.body);
        var item = new ItemSchema(req.body);

        console.log(item);
        var query = {'id':req.body.id};
        console.log(req.body)
        ItemSchema.findOneAndUpdate(query,
            // req.body
            {
                $setOnInsert:req.body
            }
            , {
                upsert: true,
                'new': true,
                runValidators: true,
                setDefaultsOnInsert: true
            },
            function(err, doc){
                if (err) return res.send(500, { error: err });
                return res.jsonp(doc);
            });
    }
    catch(error) {
        console.log(error);
    }

};
