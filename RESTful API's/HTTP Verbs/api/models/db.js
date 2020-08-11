const mongoose = require('mongoose');

let uri = 'mongodb://localhost/country_data';

if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI;
}


mongoose.connect(uri, { useNewUrlParser: true });


mongoose.connection.on('connected', () => {
    console.log("======================");
    console.log("======================");
    console.log(`Mongoose connected to ${uri}`);
    console.log("======================");
    console.log("======================");
});

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const shutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};



process.once('SIGUSR2', () => {
    shutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});


process.on('SIGINT', () => {
    shutdown('app termination', () => {
        process.exit(0);
    });
});


process.on('SIGTERM', () => {
    shutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require("./countries")
