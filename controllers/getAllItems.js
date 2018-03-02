'use strict';

/**
 * Module dependencies.
 */
var getItemById = require('./getItem');
var mongoose = require('mongoose'),
    ItemSchema = mongoose.model('ItemSchema'),
    VoucherSchema = mongoose.model('VoucherSchema'),
    DealSchema = mongoose.model('DealSchema');

/**
 * Create/Update an Item
 */
exports.findAllItems = function(req, res) {
    console.log("Inside getItems ");
    let promiseArr = [];
    try {
        var response = [];
        ItemSchema.find({}).exec(
            async function(err, listItems){
                return res.jsonp(listItems);
          });
    }
    catch(error) {
        console.log("ERROR" + error);
    }

};

// function getItem(item) {
//   try {
//     console.log("inside getItem");
//     let itemObj = item.toObject();
//     new Promise(return VoucherSchema.findOne({"item_id": item.id}).exec(
//         function(err, voucher) {
//           console.log("inside await");
//           if (err) return res.send(500, { "error": err });
//         //  console.log(voucher);
//           itemObj.vouch_price = voucher.vouched_price;
//           itemObj.min_vouch = voucher.min_voucher;
//           itemObj.voucher_expiration = voucher.voucher_expiration;
//           let totalCount = 0;
//           // console.log(voucher._id);
//           DealSchema.find({"vouch_id": voucher._id}).exec(
//             function(err, deals) {
//               // console.log("deals" + deals);
//               for(let i = 0; i < deals.length; i++) {
//                   var deal = deals[i];
//                   totalCount+= deal.vouchQty;
//               }
//
//               itemObj.vouch_qty = totalCount;
//               console.log(itemObj);
//               return itemObj;
//           });
//         });
//   } catch (error) {
//     return error;
//   }
// }
