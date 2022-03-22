const express = require('express');


const app = express();

app.get('/', (req, res) => {
	res.json({message: 'Main root for the api'})
})

module.exports = app;