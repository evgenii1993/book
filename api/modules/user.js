/**
 * Created by oleg on 09.06.17.
 */
var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:pass@ds155411.mlab.com:55411/book_test', ['users']);
var string = require('../../site/language/language');
var session = require('./lib/session');


var User = {
    auth: function (resp, params) {
        var user = params.data;
        db.users.findOne(user, function(error, user){
            if(error){
                resp.send(error);
            }
            if(user){
                delete user.password;
                session.start(user);
                resp.json({
                    success: true,
                    method: 'auth',
                    data: user
                });
            }else{
                resp.json({
                    success: false,
                    method: 'auth',
                    data: string.user_not_found
                })
            }
        });
    }
};

module.exports = User;