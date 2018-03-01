'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Item List Schema
 */
var ItemSchema = new Schema({
    id: {
        type: String,
        required:true,
        trim: true
    },
    image_small: {
        type: String,
        trim: true
    },
    image_big: {
        type: String,
        required:true,
        trim: true
    },
    name: {
        type: String,
        required:true,
        trim: true
    },
    description: {
        type: String,
        required:true,
        trim: true
    },
    current_price: {
        type: String,
        required:true,
        trim: true
    }
});

mongoose.model('ItemSchema', ItemSchema);
