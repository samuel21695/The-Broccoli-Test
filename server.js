const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const app = express();

app.use(cors());

// Create a connection to MariaDB database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'broccoli'
});

// Connect to MariaDB
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
  } else {
    console.log('Connected to MariaDB');
  }
});

// Define a route to handle GET requests to /foods
app.get('/foods', (req, res) => {
  // If search term is provided in the query, filter foods based on the search term
  if (req.query.search) {
    const searchTerm = req.query.search;
    const searchQuery = `SELECT * FROM foods WHERE name LIKE '%${searchTerm}%'`;
    connection.query(searchQuery, (err, results) => {
      if (err) {
        console.error('Error searching foods', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(results);
      }
    });
  } else {
    // If no search term provided, fetch all foods
    const query = 'SELECT * FROM foods';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error querying MariaDB', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(results);
      }
    });
  }
});

// Define the port number for the server to listen on
const PORT = process.env.PORT || 3001;
// Start the server and listen for incoming connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});