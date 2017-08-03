/**
 * Created by oleg on 25.07.17.
 */
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:pass@ds155411.mlab.com:55411/book_test', ['books']);
var mail = require('./lib/mail');

var Registration = {
        add: function (resp, params) {
            mail.send();
            resp.json({
                success: true,
                method: 'add',
                data: params
            });
        }
    };

module.exports = Registration;