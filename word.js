/**
 * Created by deryx on 8/29/2018.
 */

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var WordSchema = new Schema({
  category: String,
  word: String,
  translation: String,
  gender: String,
  image: String,
  pronunciation: String
});

module.exports = mongoose.model( 'Word', WordSchema );
