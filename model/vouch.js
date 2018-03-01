'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Bucket List Schema
 */
var VouchSchema = new Schema({
  vouched_date: {
    type: Date,
    default: Date.now
  },
  emailAddress: {
    type: String,
    default: '',
    trim: true
  },
  itemId: {
    type: String,
    default: '',
    trim: true
  },
  vouchQty: {
    type: Number,
    default: 1
  }
});

mongoose.model('vouch', VouchSchema);
