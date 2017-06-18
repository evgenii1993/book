/**
 * Created by oleg on 09.06.17.
 */
var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:pass@ds155411.mlab.com:55411/book_test', ['books']);

var Book = function (router) {
    //get all books
    router.get('/books', function (req, res, next) {
        db.books.find(function(error, books){
            if(error){
                res.send(error);
            }
            res.json(books);
        })
    });

    //get one book
    router.get('/books/:id', function (req, res, next) {
        db.books.findOne({_id: mongojs.ObjectId(req.params.id)}, function(error, book){
            if(error){
                res.send(error);
            }
            res.json(book);
        })
    });

    //save book
    router.post('/book', function (req, res, next) {
        var book = req.body;
        if(!book.title){
            res.status(400);
            res.json({
                "error": "bad data"
            });
        }else{
            db.books.save(book, function (error, book) {
                if(error){
                    res.send(error);
                }
                res.json(book);
            });
        }
    });

    //delete one book
    router.delete('/book/:id', function (req, res, next) {
        db.books.remove({_id: mongojs.ObjectId(req.params.id)}, function(error, book){
            if(error){
                res.send(error);
            }
            res.json(book);
        })
    });
    //update
    router.put('/book/:id', function (req, res, next) {
        var book = req.body;
        var upBook = {};

        if(book.status){
            upBook.status = book.status;
        }
        if(book.title){
            upBook.title = book.title;
        }
        if(!upBook){
            res.status(400);
            res.json({
                "error": "bad data"
            });
        }else{
            db.books.update({_id: mongojs.ObjectId(req.params.id)}, upBook, {}, function(error, book){
                if(error){
                    res.send(error);
                }
                res.json(book);
            })
        }
    });
};

module.exports = Book;