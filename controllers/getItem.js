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
exports.findItem = function(req, res) {
    // console.log("Inside getItem By Id");
    try {
        // console.log(req.params.item_id);
        var query = {"id":req.params.item_id};

        ItemSchema.findOne(query).exec(
            function(err, item){
                if (err) return res.status(500).send(err);
                // console.log(item.id);
                // console.log(item);
                let itemObj = item.toObject();

                VoucherSchema.findOne({"item_id": item.id}).exec(
                    function(err, voucher) {
                      if (err) return res.send(500, { "error": err });
                    //  console.log(voucher);
                      itemObj.vouch_price = voucher.vouched_price;
                      itemObj.min_vouch = voucher.min_voucher;
                      itemObj.voucher_expiration = voucher.voucher_expiration;
                      let totalCount = 0;
                      // console.log(voucher._id);
                      DealSchema.find({"vouch_id": voucher._id}).exec(
                        function(err, deals) {
                          // console.log("deals" + deals);
                          for(let i = 0; i < deals.length; i++) {
                              var deal = deals[i];
                              totalCount+= deal.vouchQty;
                          }

                          itemObj.vouch_qty = totalCount;
                          console.log(itemObj);

                          res.jsonp(itemObj);
                      });
                    });
                // return res.jsonp(doc);
            });
    }
    catch(error) {
        console.log(error);
    }

};
