const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create a connection to MariaDB database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'broccoli'
});
