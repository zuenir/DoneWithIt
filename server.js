const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const app = express();

//Connect DataBase
connectDB();

app.get('/',(req,res) => res.send('API Running OK'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`DoneWithIt Server Listening on ${PORT}`));
