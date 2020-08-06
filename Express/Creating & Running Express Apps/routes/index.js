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
router.get('/123/abc', function(req, res, next) {
    res.send("<h1>Nothing Here</h1> <a href='/'>Go Back Home</a>");
    // res.render('Stats', { title: 'Stats' });
});
router.get('/register', function(req, res, next) {
    // res.send("<h1>Nothing Here</h1> <a href='/'>Go Back Home</a>");
    res.render('register_form',{title : 'Register new Account'});
});

router.post('/register',function({body},res) {
    console.log(body);
    let submissionData = {
        message:"credentials",
        credentials : {
            username: body.username,
            password : body.password
        }
    }
    // console.log(submissionData);
    res.json(submissionData);
});

router.get('/users', function(req, res, next) {
    // res.json("GetUsers");
    let msg = {
        msg:"Finding all users",
    };
    let filters = [];
    let role =req.query.role || "";
    let recentSubs =req.query.new || "";
    role && (filters.push({role:role}));
    recentSubs && (filters.push({recentSubs:true}));
    if (filters.length) {
        msg.filters = filters;
        msg.msg = "Finding users with a filter";
    }
    filters.length && (msg.filters = filters);
    res.json(msg);

});
router.get('/users/:userid', function(req, res, next) {
    // res.json("Get specific user");
    let id = req.params.userid;
    res.json(`Getting user with id : ${id}`);
});


module.exports = router;
