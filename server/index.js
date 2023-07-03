const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

const authRoute = require('./routes/auth');

const connect = () => {
  mongoose
    .connect(process.env.CONNECTION)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((err) => console.error(err));
};

app.use(express.json());
app.use(cookieParser());
app.use('/api', authRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server started on ${process.env}.`);
});
