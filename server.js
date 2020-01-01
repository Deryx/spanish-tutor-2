var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: 'AKIAVPTOLHKUT6KALSGP',
  secretAccessKey: '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'
});

var dynamoDb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10', region: 'us-east-2'});

var verbTable = "Verbs";
var wordTable = "Vocabulary";

app.use( bodyParser.urlencoded( { extended: true }));
app.use( bodyParser.json() );

var port = process.env.PORT || 4000;
var router = express.Router();

router.route( '/verbs' ).get( function(req, res, next ){
  const params = {
    TableName: verbTable
  };
  dynamoDb.scan(params, function(err, verbs){
    if( err ){
      return next( err );
    }
    res.json( verbs );
  });
});

router.route( '/verbs/infinitive/:infinitive' ).get( function(req, res, next ){
  const params = {
    TableName: verbTable,
    FilterExpression: "infinitive = :infinitive",
    ExpressionAttributeValues: {
      ":infinitive": req.params.infinitive
    }
  };
  dynamoDb.scan(params, function( err, verb ){
    if( err ){
      return next( err );
    }
    res.json( verb );
  });
});

router.route( '/verbs' ).post( function(req, res, next ){
  const params = {
    TableName: verbTable,
    Item:{
      "infinitive": req.body.infinitive,
      "translation": req.body.translation,
      "conjugations": req.body.conjugations
    }
  }
  dynamoDb.put(params, function( err, post ){
    if( err ){
      return next( err );
    }
    res.json( post );
  })
});

router.route( '/words' ).get( function(req, res, next ){
  const params = {
    TableName: wordTable
  };
  dynamoDb.scan(params, function(err, words){
    if( err ){
      return next( err );
    }
    res.json( words );
  });
});

router.route( '/words/category/:category' ).get( function(req, res, next ){
  const params = {
    TableName: wordTable,
    FilterExpression: "category = :category",
    ExpressionAttributeValues: {
      ":category": req.params.category
    }
  }
  dynamoDb.scan(params, function(err, words){
    if( err ){
      return next( err );
    }
    res.json( words );
  });
});

router.route( '/words' ).post( function( req, res, next ){
  const params = {
    TableName: wordTable,
    Item:{
        "word": req.body.word,
        "translation": req.body.translation,
        "pronunciation": req.body.pronunciation,
        "category": req.body.category,
        "gender": req.body.gender,
        "image": req.body.image
    }
  }
  dynamoDb.put(params, function( err, post ){
    if( err ){
      return next( err );
    }
    res.json( post );
  })
});

app.use( cors() );
app.use( '/', router );
app.listen( port );
console.log( 'REST API is running at ' + port );
