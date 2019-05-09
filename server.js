var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var verb = require('./verb');
var word = require('./word');

app.use( bodyParser.urlencoded( { extended: true }));
app.use( bodyParser.json() );

var port = process.env.PORT || 4000;
var router = express.Router();

mongoose.connect( 'mongodb://localhost:27017/spanish' );

router.route( '/verbs' ).get( function(req, res, next ){
  verb.find(function(err, verbs){
    if( err ){
      return next( err );
    }
    res.json( verbs );
  });
});

router.route( '/verbs/:infinitive' ).get( function(req, res, next ){
  verb.findOne({ 'infinitive': req.params.infinitive }, function( err, verb ){
    if( err ){
      return next( err );
    }
    res.json( verb );
  });
});

router.route( '/verbs' ).post( function(req, res, next ){
  verb.create(req.body, function( err, post ){
    if( err ){
      return next( err );
    }
    res.json( post );
  })
});

router.route( '/words' ).get( function(req, res, next ){
  word.find(function(err, words){
    if( err ){
      return next( err );
    }
    res.json( words );
  });
});

router.route( '/words/:category' ).get( function(req, res, next ){
  word.find({ 'category': req.params.category }, function(err, words){
    if( err ){
      return next( err );
    }
    res.json( words );
  });
});

router.route( '/words' ).post( function( req, res, next ){
  word.create(req.body, function( err, post ){
    if( err ){
      return next( err );
    }
    res.json( post );
  })
});

app.use( cors() );
app.use( '/api', router );
app.listen( port );
console.log( 'REST API is running at ' + port );
