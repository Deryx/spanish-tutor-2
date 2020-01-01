/**
 * Created by deryx on 8/29/2018.
 */

var AWS = require('aws-sdk');
var dynamoDb= new AWS.DynamoDB.DocumentClient();
dynamoDb.config.loadFromPath('credentials.json');

var Verb = dynamo.define('Verb', {
  hashKey : 'infinitive',
 
  schema : {
    infinitive    : Joi.string().infinitive(),
    translation   : Joi.string(),
    conjugations  : {
      present: {
        yo  : Joi.string(),
        tu  : Joi.string(),
        el  : Joi.string(),
        nosotros: Joi.string(),
        els : Joi.string()
      },
      preterite: {
        yo  : Joi.string(),
        tu  : Joi.string(),
        el  : Joi.string(),
        nosotros: Joi.string(),
        els : Joi.string()
      },
      imperfect: {
        yo  : Joi.string(),
        tu  : Joi.string(),
        el  : Joi.string(),
        nosotros: Joi.string(),
        els : Joi.string()
      },
      future: {
        yo  : Joi.string(),
        tu  : Joi.string(),
        el  : Joi.string(),
        nosotros: Joi.string(),
        els : Joi.string()
      },
    }
  }
});

module.exports = dynamoDb.model( 'Verb', Verb );
