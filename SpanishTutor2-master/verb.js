/**
 * Created by deryx on 8/29/2018.
 */

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var VerbSchema = new Schema({
  infinitive: String,
  translation: String,
  conjugations: [{
    tense: String,
    yo: String,
    tu: String,
    el: String,
    nosotros: String,
    els: String
  }]
});

module.exports = mongoose.model( 'Verb', VerbSchema );
