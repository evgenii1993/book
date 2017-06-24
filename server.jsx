import express          from 'express';
import path             from 'path';
import bodyParser       from 'body-parser';
import defaultService   from './routes/service';
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
    let path = "."+req.url,
        type = '';
    switch(req.url.split(".").pop()) {
        case 'js':
            type = "text/javascript";
            break;
        case 'ico':
            type = "image/x-icon";
            break;
        case 'css':
            type = "text/css";
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
require('./routes/coreRoutes')(app);

app.get('/api', defaultService);
//Route not found -- Set 404
app.get('*', (req, res) => {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
    res.end();
});

// app.listen(port);
// console.log('Server is Up and Running at Port : ' + port);
//

// // app.use('/welcome', index);
// // app.use('/', index);
//
app.listen(port, () => {
    console.log("server start port: "+port);
});
