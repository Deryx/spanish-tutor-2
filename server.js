const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const app = express().use(cors());
const database = new sqlite3.Database('spanish.db');

const CategoryType = new graphql.GraphQLObjectType({
  name: "Category",
  fields: {
    id: { type: graphql.GraphQLID },
    category: { type: graphql.GraphQLString }
  }
});

const WordType = new graphql.GraphQLObjectType({
  name: "Word",
  fields: {
    id: { type: graphql.GraphQLID },
    word: { type: graphql.GraphQLString },
    translation: { type: graphql.GraphQLString },
    pronunciation: { type: graphql.GraphQLString },
    category: { type: graphql.GraphQLInt },
    gender: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString }
  }
});

const TenseType = new graphql.GraphQLObjectType({
  name: "Tense",
  fields: {
    id: { type: graphql.GraphQLID },
    tense: { type: graphql.GraphQLString },
  }
});

const VerbIdType = new graphql.GraphQLObjectType({
  name: "VerbId",
  fields: {
    id: { type: graphql.GraphQLID }
  }
});

const VerbType = new graphql.GraphQLObjectType({
  name: "Verb",
  fields: {
    id: { type: graphql.GraphQLID },
    infinitive: { type: graphql.GraphQLString },
    translation: { type: graphql.GraphQLString },
    pronunciation: { type: graphql.GraphQLString },
  }
});

const ConjugationType = new graphql.GraphQLObjectType({
  name: "Conjugation",
  fields: {
    id: { type: graphql.GraphQLID },
    verb: { type: graphql.GraphQLInt },
    tense: { type: graphql.GraphQLInt },
    yo: { type: graphql.GraphQLString },
    tu: { type: graphql.GraphQLString },
    el: { type: graphql.GraphQLString },
    nosotros: { type: graphql.GraphQLString },
    vosotros: { type: graphql.GraphQLString },
    ellos: { type: graphql.GraphQLString }
  }
})

let queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    categories: {
      type: graphql.GraphQLList(CategoryType),
      resolve: (root, args, context, info) => {
        return new Promise( (resolve, reject ) => {
          database.all("SELECT * FROM Categories;", function (err, rows) {
            if (err) {
              reject([]);
            }
            resolve(rows);
          });
        });
      }
    },
    dictionary: {
      type: graphql.GraphQLList(WordType),
      resolve: (root, args, context, info) => {
        return new Promise( (resolve, reject ) => {
          database.all("SELECT * FROM Words;", function (err, rows) {
            if (err) {
              reject([]);
            }
            resolve(rows);
          });
        });
      }
    },
    category: {
      type: graphql.GraphQLList(WordType),
      args: {
        category: {
          type: graphql.GraphQLInt
        }
      },
      resolve: (root, {
        category
      }, context, info) => {
        return new Promise( (resolve, reject) => {
          database.all("SELECT * FROM Words WHERE category = (?);", [category], function (err, rows) {
            if (err) {
              reject(null);
            }
            resolve(rows);
          });
        });
      }
    },
    word: {
      type: graphql.GraphQLList(WordType),
      args: {
        word: {
          type: graphql.GraphQLString
        }
      },
      resolve: (root, {
        word
      }, context, info) => {
        return new Promise( (resolve, reject) => {
          database.all("SELECT * FROM Words WHERE word LIKE (?) OR translation LIKE (?);", [word, word], function (err, rows) {
            if (err) {
              reject(null);
            }
            resolve(rows);
          });
        });
      }
    },
    tenses: {
      type: graphql.GraphQLList(TenseType),
      resolve: (root, args, context, info) => {
        return new Promise( (resolve, reject ) => {
          database.all("SELECT * FROM Tenses;", function (err, rows) {
            if (err) {
              reject([]);
            }
            resolve(rows);
          });
        });
      }
    },
    verbs: {
      type: graphql.GraphQLList(VerbType),
      resolve: (root, args, context, info) => {
        return new Promise( (resolve, reject ) => {
          database.all("SELECT * FROM Verbs;", function (err, rows) {
            if (err) {
              reject([]);
            }
            resolve(rows);
          });
        });
      }
    },
    verb: {
      type: graphql.GraphQLList(VerbType),
      args: {
        verb: {
          type: graphql.GraphQLString
        }
      },
      resolve: (root, {
        verb
      }, context, info) => {
        return new Promise( (resolve, reject) => {
          database.all("SELECT * FROM Verbs WHERE infinitive LIKE (?) OR translation LIKE (?);", [verb, verb], function (err, rows) {
            if (err) {
              reject(null);
            }
            resolve(rows);
          });
        });
      }
    },
    verbId: {
      type: VerbIdType,
      args: {
        verb: {
          type: graphql.GraphQLString
        }
      },
      resolve: (root, {
        verb
      }, context, info) => {
        return new Promise( (resolve, reject) => {
          database.all("SELECT id FROM Verbs WHERE infinitive = (?);", [verb], function (err, rows) {
            if (err) {
              reject(null);
            }
            resolve(rows[0]);
          });
        });
      }
    },
    conjugation: {
      type: graphql.GraphQLList(ConjugationType),
      args: {
        verb: {
          type: graphql.GraphQLInt
        },
        tense: {
          type: graphql.GraphQLInt
        }
      },
      resolve: (root, {
        verb,
        tense
      }, context, info) => {
        return new Promise( (resolve, reject) => {
          database.all("SELECT * FROM Conjugations WHERE verb = (?) AND tense = (?);", [verb, tense], function (err, rows) {
            if (err) {
              reject(null);
            }
            resolve(rows);
          });
        });
      }
    },
    conjugations: {
      type: graphql.GraphQLList(ConjugationType),
      args: {
        verb: {
          type: graphql.GraphQLInt
        }
      },
      resolve: (root, {
        verb
      }, context, info) => {
        return new Promise( (resolve, reject) => {
          database.all("SELECT * FROM Conjugations WHERE verb = (?);", [verb], function (err, rows) {
            if (err) {
              reject(null);
            }
            resolve(rows);
          });
        });
      }
    }
  }
});

let mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createWord: {
      type: WordType,
      args: {
        word: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        translation: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        pronunciation: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        category: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        gender: {
          type: graphql.GraphQLString
        },
        image: {
          type: graphql.GraphQLString
        }
      },
      resolve: (root, {
        word,
        translation,
        pronunciation,
        category,
        gender,
        image
      }, context, info) => {
        return new Promise((resolve, reject) => {
          database.run('INSERT INTO Words (word, translation, pronunciation, category, gender, image) VALUES (?, ?, ?, ?, ?, ?);', [word, translation, pronunciation, category, gender, image], (err) => {
            if (err) {
              reject(null);
            }
            database.get("SELECT last_insert_rowid() as id", (err, row) => {
              resolve({
                id: row["id"],
                word: word,
                translation: translation,
                pronunciation: pronunciation,
                category: category,
                gender: gender,
                image: image
              });
            });
          });
        });
      }
    },
    createVerb: {
      type: VerbType,
      args: {
        infinitive: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        translation: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        pronunciation: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
      },
      resolve: (root, {
        infinitive,
        translation,
        pronunciation
      }, context, info) => {
        return new Promise((resolve, reject) => {
          database.run('INSERT INTO Verbs (infinitive, translation, pronunciation) VALUES (?, ?, ?);', [infinitive, translation, pronunciation], (err) => {
            if (err) {
              reject(null);
            }
            database.get("SELECT last_insert_rowid() as id", (err, row) => {
              resolve({
                id: row["id"],
                infinitive: infinitive,
                translation: translation,
                pronunciation: pronunciation,
              });
            });
          });
        });
      }
    },
    createConjugation: {
      type: ConjugationType,
      args: {
        verb: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        tense: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        yo: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        tu: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        el: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        nosotros: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        vosotros: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        ellos: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        }
      },
      resolve: (root, {
        verb,
        tense,
        yo,
        tu,
        el,
        nosotros,
        vosotros,
        ellos
      }) => {
        return new Promise((resolve, reject) => {
          database.run('INSERT INTO Conjugations (verb, tense, yo, tu, el, nosotros, vosotros, ellos) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [verb, tense, yo, tu, el, nosotros, vosotros, ellos], (err) => {
            if (err) {
              reject(null);
            }
            database.get("SELECT last_insert_rowid() as id", (err, row) => {
              resolve({
                id: row["id"],
                verb: verb,
                tense: tense,
                yo: yo,
                tu: tu,
                el: el,
                nosotros: nosotros,
                vosotros: vosotros,
                ellos: ellos
              });
            });
          });
        });
      }
    }
  }
});

const schema = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

app.use('/graphql', 
  graphqlHTTP(request => ({ 
    schema: schema, 
    graphiql: true
  }))
);
app.listen(5000, () => {
  console.log("GraphQL server running at http://localhost:5000");
});