const request = require('request');

getCountryList = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}
getCountry = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}
createCountry = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}
editCountry = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}
deleteCountry = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}


module.exports = {
    getCountryList,
    getCountry,
    createCountry,
    editCountry,
    deleteCountry
}
