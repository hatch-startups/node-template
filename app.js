require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { authenticate } = require('./middlewares/auth');

const app = express();
app.use(cors());

app.use(express.json({ limit: process.env.JSON_SIZE_LIMIT }));
app.use(express.json());
app.use(authenticate);

app.use('/', require('./routes/index'));

module.exports = {
	app,
};
