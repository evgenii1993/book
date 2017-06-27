/**
 * Created by oleg on 09.06.17.
 */
//var express = require('express');
//var router = express.Router();


/**
 * модули для обработки запросов
 * */
// var book = require('./api/book');
// var user = require('./api/user');

/**
 * активируем импортируемые модули
 */

// user(router);
// book(router);

var router = function (param) {
    return {
        data: [1,2,3,4,5,6]
    }
};


module.exports = router;