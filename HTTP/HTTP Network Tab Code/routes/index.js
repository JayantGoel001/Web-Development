var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Set-Cookie", "new-secret=express-12345");
    res.render('index', { title: 'HTTP' });
});

module.exports = router;
