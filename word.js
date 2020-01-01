/**
 * Created by deryx on 8/29/2018.
 */

var Word = dynamo.define('Word', {
  hashKey : 'word',
 
  schema : {
    word          : Joi.string().word(),
    translation   : Joi.string(),
    category      : Joi.string(),
    pronunciation : Joi.string(),
    image         : Joi.string(),
    gender        : Joi.string()
  }
});

module.exports = dynamo.model( 'Word', Word );
