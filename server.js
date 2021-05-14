const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoute);
app.use('/api', apiRoute);

app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));