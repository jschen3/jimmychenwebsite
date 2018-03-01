'use strict';

/**
 * Module dependencies.
 */

var voucher = require('../model/voucher')
var mongoose = require('mongoose'),
    VoucherSchema = mongoose.model('VoucherSchema');

/**
 * Create/Update an Item
 */
exports.create = function(req, res) {
    console.log("Inside item create");
    try {
        console.log(req.body);
        var voucher = new VoucherSchema(req.body);

        console.log(voucher);
        var query = {'item_id':req.body.item_id};
        console.log(req.body)
        VoucherSchema.findOneAndUpdate(query,
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
