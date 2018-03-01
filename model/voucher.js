'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Voucher Schema
 */
var VoucherSchema = new Schema({
    item_id: {
      type: String,
      required:true,
    },
    vouched_price: {
        type: String,
        required:true,
        trim: true
    },
    min_voucher: {
        type: Number,
        required:true,
        trim: true
    },
    voucher_expiration: {
        type: Date,
        default: Date.Now,
    },
    is_vouchable: {
        type: Boolean,
        default: false
    }
});

mongoose.model('VoucherSchema', VoucherSchema);
