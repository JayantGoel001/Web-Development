var express = require('express');
var router = express.Router();

let countryCtrl = require('../controllers/countries');

router.route("/countries/new")
      .get(countryCtrl.getCountryForm);

router.route("/countries/:countryid/edit")
      .get(countryCtrl.getEditCountryForm);

router.route("/country/:countryid")
      .get(countryCtrl.getCountry)
      .put(countryCtrl.editCountry)
      .delete(countryCtrl.deleteCountry);

router.route("/countries")
      .get(countryCtrl.getCountries)
      .put(countryCtrl.createCountry);

module.exports = router;
