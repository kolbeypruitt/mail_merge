var express = require('express');
var router = express.Router();
var backEnd = require("../lib/backEnd");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mail Merge'
   });
});

router.post('/preview', function(req, res, next) {
  var emailArray = backEnd.buildEmailObjects(req.body);
  res.render('index', { emails: emailArray });
});


module.exports = router;

