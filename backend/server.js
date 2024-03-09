const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000; // Updated port assignment

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'lawfirm'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// Define routes
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the Express backend!' });
});

app.get('/testdb', (req, res) => {
    connection.query('SELECT 1', (err, result) => {
        if (err) {
            console.error('Error querying MySQL: ', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json({ message: 'Connected to MySQL' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
