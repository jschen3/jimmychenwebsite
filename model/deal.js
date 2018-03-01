'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Bucket List Schema
 */
var DealSchema = new Schema({
  vouched_date: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: String,
    default: '',
    trim: true
  },
  vouch_id: {
    type: String,
    default: '',
    trim: true
  },
  vouchQty: {
    type: Number,
    default: 1
  }
});

mongoose.model('DealSchema', DealSchema);
