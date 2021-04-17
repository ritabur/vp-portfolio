const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
const port = 8080;

dotenv.config();

// for handling post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(port, () => console.log(`Listening at ${port}`));
