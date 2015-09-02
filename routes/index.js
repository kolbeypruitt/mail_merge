var express = require('express');
var router = express.Router();
var something = require("../lib/something");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mail Merge' 
   });
});

module.exports = router;
