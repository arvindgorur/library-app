var express = require('express');
var chalk   = require('chalk');
var morgan  = require('morgan');

var app = express();

app.use(morgan('tiny'));

app.get('/', function(req,res) {
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log(`Listening on port ${chalk.green('3000')}`);
})