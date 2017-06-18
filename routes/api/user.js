/**
 * Created by oleg on 09.06.17.
 */
var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:pass@ds155411.mlab.com:55411/book_test', ['users']);

var User = function (router) {
    //get one user
    router.post('/login', function (req, res, next) {
        var user = req.body;

        db.users.findOne(user, function(error, user){
            if(error){
                res.send(error);
            }
            if(user){
                res.json({
                    success: true,
                    data: user
                });
            }else{
                res.json({
                    success: false,
                    data: "User not found"
                });
            }

        })



        // res.json({
        //     success: true
        // });
    });
};

module.exports = User;