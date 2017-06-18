/**
 * Created by oleg on 09.06.17.
 */
var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser');

var index = require('./routes/index');
var defaultService = require('./routes/service');

var port = 3000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api', defaultService);
app.use('/welcome', index);
app.use('/', index);

app.listen(port, function () {
    console.log("server start port: "+port);
});
