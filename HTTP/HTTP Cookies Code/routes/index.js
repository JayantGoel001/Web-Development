var express = require('express');
var router = express.Router();

const adminSecretPassword = "7HISIsmYD0MAIn";


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'HTTP', isAdmin: (req.cookies.adminToken == adminSecretPassword ? true : false ) });
});


router.get('/admin-area', function(req, res, next) {
    res.render('admin-sign-in', { title: 'Admin Area', isAdmin: (req.cookies.adminToken == adminSecretPassword ? true : false ) });
});


router.post('/admin-sign-in', function(req, res, next) {
    if(req.body.password === adminSecretPassword) {
        console.log("It's the admin, let him in.");
        let days = 30;
        let seconds = (60 * 60) * 24 * days;
        res.header("Set-Cookie", `adminToken=${req.body.password}; SameSite=strict; max-age=${seconds}`);
    }
    res.redirect("/");
});



module.exports = router;
