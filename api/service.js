/**
 * Created by oleg on 09.06.17.
 */



var router = function (req, resp, io) {

    var session = require('./modules/lib/session');
    var controller = require('./modules/'+req.params.class);
    var body = "";

    console.log("session: ",session.authList);
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        //io.dispatchEvent()
        controller[req.params.method](resp, JSON.parse(body));
    });
};

module.exports = router;