require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes

app.use(require('./routes/index'));

// Static content

app.use(express.static(path.join(__dirname, 'public')));

// app.listen(3000);
app.listen(8080);

console.log('Server listening...');