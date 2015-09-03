var express = require('express');
var router = express.Router();
var something = require("../lib/something");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mail Merge'
   });
});

router.post('/', function(req, res, next) {
  res.render('index', {
    title: 'Merge',
    recipient: req.body.recipient,
    subject: req.body.subject,
    emailBody: req.body.emailBody
   });
});




module.exports = router;