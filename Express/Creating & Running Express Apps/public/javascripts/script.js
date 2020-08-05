console.log("Express is Working");
let obj ={
    "name" :{
        'firstname' : 'Nancy',
        'lastname' : 'Benny'
    },
    'email' : 'OhhNancy@gmail.com',
    'age' : 35,
    'location' : {
        'country' : 'New Zealand',
        'city' : 'Auckland',
        'homeaddress':'40 Pandora Avenue, Sewyn Heights'
    },
    'likes':['Swimming','Sleeping']
};

console.log(obj);

let jsobj ={
    name :{
        firstname : 'Nancy',
        lastname : 'Benny'
    },
    email : 'OhhNancy@gmail.com',
    age : 35,
    location : {
        country : 'New Zealand',
        city : 'Auckland',
        homeaddress:'40 Pandora Avenue, Sewyn Heights'
    },
    likes : ['Swimming','Sleeping']
};
console.log(jsobj);

var serializedObj = JSON.stringify(jsobj);
console.log(serializedObj);
console.log(typeof serializedObj);

var objAgain = JSON.parse(serializedObj);
console.log(objAgain);
console.log(typeof objAgain);

// Serialization : it converts json into string.
