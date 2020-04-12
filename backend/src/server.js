const express = require('express');
const mongoose =require('mongoose');
const routes = require('./routes')

const server = express();

mongoose.connect(
    'mongodb+srv://felipe:24zOWiUqr80d4kOy@cluster0-9z1pl.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true});

server.use(express.json());
server.use(routes);

server.listen(3333);