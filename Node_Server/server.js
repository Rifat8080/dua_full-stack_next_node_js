const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const db = new sqlite3.Database('dua_main.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/categories', (req, res) => {
    db.all('SELECT * FROM category', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ categories: rows });
    });
});

app.get('/subcategories', (req, res) => {
    db.all('SELECT * FROM sub_category', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ subcategories: rows });
    });
});

app.get('/duas', (req, res) => {
    db.all('SELECT * FROM dua', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ duas: rows });
    });
});

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection');
        process.exit(0);
    });
});

const port = 4000; 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
