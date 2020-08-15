const mongoose = require('mongoose');
const crypto = require('crypto');

console.log("==========================");
let salt = crypto.randomBytes(64).toString('hex');
console.log(salt);
console.log("==========================");
console.log("==========================");
let password = crypto.pbkdf2Sync('password1',salt,1000,64,'sha512').toString('hex');
console.log(password);

console.log("==========================");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
    salt:String

});

mongoose.model("User",userSchema);
