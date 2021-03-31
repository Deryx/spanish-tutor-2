# My Spanish Tutor

**My Spanish Tutor** is an application created to help beginning learners, including myself, learn Spanish by studying flashcards and utilizing various other exercises. Another primary motivation for creating this application was to:

* Learn Angular 2+
* Implement the following data storage solutions:
	* JSON
	* MongoDB
	* Serverless AWS
	* DynamoDB
	* SQLite3
* Learn GraphQL


## Features

My Spanish Tutor features the following mini-applications:

#### Verbs
* Conjugation Flashcards
* Conjugator
* Slider

#### Vocabulary
* Flashcards
* Completion
* Fill-in
* Quiz
* Scramble
* Slider

At the present time, the verbs in the **indicative** mood. The other two moods, **subjunctive** and **imperative** will come later.

## Branches

### sqlite

This branch was adapted from the master branch to use the relational database SQLite and query language GraphQL. This branch was created with the intention of developing a relational database that could be used in case I decide to develop a mobile app.


### gh-pages

This branch was adapted from the sqlite branch. Five json files - verbs, conjugation, tenses, vocabulary, and categories - were created from the SQLite database. Json files were created so that the application could be fully functional on GitHub. Functions just like the application on the sqlite branch except it doesn't have the verb input and vocabulary input compoonents. You can access the app with this link: [My Spanish Tutor](https://deryx.github.io/spanish-tutor-2/ "My Spanish Tutor").

### dynamoDb

This branch was adapted from the master branch to utilize AWS Serverless technology and the noSQL database, dynamoDb. This was an attempt to be able to publish My Spanish Tutor on gh-pages. 

