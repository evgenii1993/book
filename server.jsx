import express          from 'express';
import path             from 'path';
import bodyParser       from 'body-parser';
import defaultService   from './api/service';
import file             from "fs";

let app = express(),
    port = 3000;


// Make sure to include the JSX transpiler
require('node-jsx').install();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    let path = "."+req._parsedUrl.pathname,
        type = '';

    switch(req._parsedUrl.pathname.split(".").pop()) {
        case 'js':
            type = "text/javascript";
            break;
        case 'ico':
            type = "image/x-icon";
            break;
        case 'png':
            type = "image/png";
            break;
        case 'jpg':
            type = "image/jpeg";
            break;
        case 'css':
            type = "text/css";
            break;
        case "woff2":
            type = "application/font-woff2";
            break;
        case 'html':
            path = "./admin/" + req.url;
            type = "text/html";
            break;
        default:
            next();
            return true;
            break;
    }
    file.readFile(path, function (err, content) {
        res.contentType(type);
        res.write(content !== undefined ? content : "content not found :)");
        res.end();
        return true;
    });
});


// Set up Routes for the application
require('./routes/serverRoutes')(app);



var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
server.listen(8080);
var io = socket_io();
io.attach(server);
io.on('connection', function(socket){
    console.log("Socket connected: " + socket.id);
    socket.on('action', (action) => {
        if(action.type === 'server/hello'){
            console.log('Got hello data!', action.data);
            socket.emit('action', {type:'message', data:'good day!'});
        }
    });
});

//api
app.use('/api/:class/:method', (req, res) => {
    defaultService(req, res, io);
});

// //Route not found -- Set 404
app.use('*', (req, res) => {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
    res.end();
});

app.listen(port, () => {
    console.log("server start port: "+port);
});




