var express = require('express');
var router = express.Router();

const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register",function({body},res) {
    if (!Object.values(body).every((val) => val )) {
        return res.send({message:"All Fields Are Required"});
    }
    if (body.password!==body.password_confirm) {
        return res.send({message:"Password Doesnot match"});
    }

    const user = new User();
    user.firstname = body.first_name.trim();
    user.lastname = body.last_name.trim();
    user.email = body.email;
    user.setPassword(body.password);

    user.save((err,newUser)=>{
        if (err) {
            res.status(400).json({ message:err });
        }
        else {
            res.status(201).json({ message:"New User",user:newUser });
        }
    });
});

module.exports = router;
