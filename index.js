require("dotenv").config();
const express = require("express");
const app = express();

// Routes section
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello About!');
});

app.get('/nursid', (req, res) => {
  res.send('Hello Nursid!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
