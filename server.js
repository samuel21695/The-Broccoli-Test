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
  // Query the foods table to get all food data
  connection.query('SELECT * FROM foods', (err, results)=> {
    if (err) {
      // If there's an error, log it and send an internal server error response
      console.error('Error querying MariaDB', err);
      res.status(500).send('Internal Server Error');
    } else {
      // If successful, send the food data as a JSON response
      res.json(results);
    }
  });
});

// Define the port number for the server to listen on
const PORT = process.env.PORT || 3001;
// Start the server and listen for incoming connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});