var express = require('express');
var chalk   = require('chalk');
var morgan  = require('morgan');
var path    = require('path');

var app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/jquery/dist')));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', {
        nav: ['Books', 'Authors'],
        title: 'My Library'
    });
});

app.listen(3000, () => {
    console.log(`Listening on port ${chalk.green('3000')}`);
})