const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.post('/submit', (req, res) => {
    const confessionText = req.body.text;

    if (!confessionText) {
        return res.status(400).send({ error: 'Text is required' });
    }

    const query = 'INSERT INTO confessions (text) VALUES (?)';
    db.query(query, [confessionText], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send({ error: 'Failed to save data' });
        }
        res.status(200).send({ message: 'Confession saved successfully!' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

