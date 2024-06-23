require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const route= require("./src/routes")
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({  
  extended: true
}));

app.use(cors());

// Routes section
const port = process.env.PORT || 5000;

app.use("/api",route)

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
