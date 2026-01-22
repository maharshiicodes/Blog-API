const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const port = process.env.port || 5000;

connectDB();

const app = express()

app.listen(port , () => console.log(`Server is started on port ${port}`));


