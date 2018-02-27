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
  id: {
    type: String,
    default: '',
    trim: true
  },
  user_id: {
    type: String,
    default: '',
    trim: true
  },
  item_id: {
    type: String,
    default: '',
    trim: true
  },
  vouch_qty: {
    type: Number,
    default: 1
  }
});

mongoose.model('vouch', VouchSchema);
