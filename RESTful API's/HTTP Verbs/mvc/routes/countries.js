const express = require('express');
const router = express.Router();

let countryCtrl = require('../controllers/countries');

router.route("/")
    .get(countryCtrl.getCountryList)
    .post(countryCtrl.createCountry);

router.route("/:countryid")
    .get(countryCtrl.getCountry)
    .put(countryCtrl.editCountry)
    .delete(countryCtrl.deleteCountry);

module.exports = router;
