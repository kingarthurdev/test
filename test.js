require('dotenv').config();
const bcrypt = require('bcrypt'); //for user pass encryption
const port = 8000;
const express = require('express')
const mysql = require('mysql')
const app = express();
app.disable('x-powered-by'); // prevent enumeration of what backend is used
app.listen(port, () => {
  console.log(`Fundraiser app listening on port ${port}`)
})
app.use(express.json());//allow request body parsing

app.set('view engine', 'ejs');
app.use("/", express.static('public'));


