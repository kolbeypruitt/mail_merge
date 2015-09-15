var express = require('express');
var router = express.Router();
var something = require("../lib/something");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mail Merge'
   });
});

router.post('/preview', function(req, res, next) {
  function buildEmailObjects(requestBody) {
 
    var arrayRecips = requestBody.recipient.split("\n");
    var emails = [];
    for (var i = 0; i < arrayRecips.length; i++) {
      emails.push({recipient: arrayRecips[i],
      subject: requestBody.subject,
      emailBody: requestBody.emailBody})
    }
    return emails
  }

        // {emails:emailObjects = [{
        //   recipient: req.body.recipient,
        //   subject: req.body.subject,
        //   emailBody: req.body.emailBody
        //  }]}

  var zebras = buildEmailObjects(req.body);
  console.log(zebras);
  res.render('index', { emails: zebras });
  // console.log(req.body.recipient);
  // console.log(req.body.subject);
  // console.log(req.body.emailBody);
});


module.exports = router;

