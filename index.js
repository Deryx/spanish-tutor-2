const fs = require("fs");
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const { ConsoleReporter } = require("jasmine");

const app = express().use(cors());
const database = new sqlite3.Database('spanish.db');

const vocabulary = '../spanish-tutor-2/src/assets/data/vocabulary.json';
const verbs = '../spanish-tutor-2/src/assets/data/verbs.json';
const conjugations = '../spanish-tutor-2/src/assets/data/conjugations.json';

app.listen(8000, () => {
    console.log("Server started (http://localhost:8000/)")
});

app.get("/vocabulary", (req, res) => {
    const sql = "SELECT * FROM Words";
    database.all(sql, [], (err, rows) => {
        if(err) {
            return console.error(err.message);
        }
        fs.writeFile(vocabulary, JSON.stringify(rows), (err) => {
            if(err) {
                throw err;
            }
            console.log("vocabulary.json created");
        });
    });
});

app.get("/verbs", (req, res) => {
    let sql = "SELECT id, infinitive, translation, pronunciation from Verbs";
    database.all(sql, [], (err, rows) => {
        if(err) {
            return console.error(err.message);
        }
        fs.writeFile(verbs, JSON.stringify(rows), (err) => {
            if(err) {
                throw err;
            }
            console.log("verbs.json created");
        });
    });
});


app.get("/conjugations", (req, res) => {
    let sql = "SELECT id, verb, tense, yo, tu, el, nosotros, vosotros, ellos from Conjugations";
    database.all(sql, [], (err, rows) => {
        if(err) {
            return console.error(err.message);
        }
        fs.writeFile(conjugations, JSON.stringify(rows), (err) => {
            if(err) {
                throw err;
            }
            console.log("conjugations.json created");
        });
    });
});

