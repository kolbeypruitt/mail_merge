var express = require('express');
var router = express.Router();
var something = require("../lib/something");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mail Merge'
   });
});

router.get('/preview', function(req, res, next) {
  res.render('index', {
    title: 'Mail Merge',
    recipient: "req.body.recipient"
   });
});

module.exports = router;


// router.get('/', function(req, res, next) {
//   res.render('index', {
//     title: 'People Table',
//     tableOutput: data.all });
// });

// req.body.unHipText