'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Bucket List Schema
 */
var ItemSchema = new Schema({
  id: {
    type: String,
    default: '',
    trim: true
  },
  image_small: {
    type: String,
    default: '',
    trim: true
  },
  image_big: {
    type: String,
    default: '',
    trim: true
  },
  name: {
    type: String,
    default: '',
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  current_price: {
    type: String,
    default: '',
    trim: true
  },
  vouched_price: {
    type: String,
    default: '',
    trim: true
  },
  min_voucher: {
    type: Number,
    default: '',
    trim: true
  },
  voucher_expiration: {
    type: Date,
    default: Date.Now
  },
  is_vouchable: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Item', ItemSchema);
