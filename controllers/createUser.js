'use strict';

/**
 * Module dependencies.
 */

var user = require('../model/user')
var mongoose = require('mongoose'),
UserSchema = mongoose.model('UserSchema');

/**
 * Create an Bucket List
 */
exports.create = function(req, res) {
  console.log("Inside user create");
  try {
    console.log(req.body);
      var query = {'emailAddress':req.body.emailAddress};
      UserSchema.findOneAndUpdate(query,
          // req.body
          {
              $setOnInsert:req.body
          }
          , {
              upsert: true,
              'new': true,
              runValidators: true,
              setDefaultsOnInsert: true
          },
          function(err, doc){
              if (err) return res.send(500, { error: err });
              return res.jsonp(doc);
          });
    // var user = new UserSchema(req.body);
    //
    // console.log(user);
    // user.save(function(err) {
    //   console.log("inside save");
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.jsonp(user);
    //   }
    // });
  }
  catch(error) {
    console.log(error);
  }

};
