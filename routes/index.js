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
    title: 'Mail Merge',
    recipient: req.body.recipient,
    subject: req.body.subject,
    emailBody: req.body.emailBody
   });
});


module.exports = router;

function MakeEmail(recipient,subject,emailBody) {
  this.recipient = recipient;
  this.subject = subject;
  this.emailBody = emailBody;
}

MakeEmail.prototype.constructor = MakeEmail;