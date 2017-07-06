const express = require('express');
const path = require('path');

const app = express();

// View engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Default portfolio page
app.get('*', function(req, res, next) {
	res.render('index.html');
});

exports.app = app;