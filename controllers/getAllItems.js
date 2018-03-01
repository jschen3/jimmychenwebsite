'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema'),
    VoucherSchema = mongoose.model('VoucherSchema'),
    DealSchema = mongoose.model('DealSchema');

/**
 * Create/Update an Item
 */
exports.findAllItems = function(req, res) {
    console.log("Inside getItems ");
    try {
        console.log(req.body);
        var item = new ItemSchema(req.body);
        var response = [];
        console.log(item);
        ItemSchema.find({}).exec(
            function(err, listItems){
                if (err) return res.send(500, { error: err });
                console.log(listItems);
                var itemResp = {};
                listItems.forEach(function(item) {

                  var itemCount = 0;
                  var validVoucher;
                  console.log(item.id);
                  VoucherSchema.find({
                    "item_id": item.id,
                    "voucher_expiration": {
                      $gte: new Date()
                    }
                  }).exec(
                    function(err, listVouchers) {
                      if (err) return res.send(500, { error: err });
                      listVouchers.forEach(function(voucher) {
                        validVoucher = voucher;
                        console.log(voucher._id);
                        DealSchema.find({"vouch_id": voucher._id}).exec(
                          function(err, deals) {
                            if (err) return res.send(500, { error: err });
                            deals.forEach(function(deal) {
                              itemCount+= deal.vouchQty;
                            });
                          }
                        );
                        item.vouchQty = itemCount;
                      });
                      console.log(item);

                      console.console.log(itemCount);
                      itemResp[item] = item;
                      response.push(itemResp);
                    });
                    return res.jsonp(response);
                });
            });
    }
    catch(error) {
        console.log(error);
    }

};
