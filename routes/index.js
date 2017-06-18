/**
 * Created by oleg on 09.06.17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
   res.render("index.html");
});

module.exports = router;