var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.send("<h1>Hello World</h1>");
    res.render('index', { title: 'Index' });
});
router.get('/shop', function(req, res, next) {
    // res.send("<h1>Hello World</h1>");
    res.render('shop', { title: 'Shop' });
});
router.get('/tickets', function(req, res, next) {
    // res.send("<h1>Hello World</h1>");
    res.render('tickets', { title: 'Tickets' });
});
router.get('/stats', function(req, res, next) {
    // res.send("<h1>Hello World</h1>");
    res.render('Stats', { title: 'Stats' });
});

module.exports = router;
