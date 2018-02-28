'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Bucket List Schema
 */
var UserSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        default: '',
        trim: true
    },
    paymentDetails: {
        type: String,
        default: '',
        trim: true
    }
});

mongoose.model('UserSchema', UserSchema);
