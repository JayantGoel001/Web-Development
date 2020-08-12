var express = require('express');
var router = express.Router();

let countryCtrl = require('../controllers/countries');
let apiGuard = function(req,res,next) {
    // next();
    if (req.get('host')!="localhost:3000") {
        res.json({error:"Cannot create, update nor Delete from the API while in production"})
    } else {
        next();
    }
}

router.route("/countries/new")
      .get(apiGuard,countryCtrl.getCountryForm);

router.route("/countries/:countryid/edit")
      .get(apiGuard,countryCtrl.getEditCountryForm);

router.route("/country/:countryid")
      .get(countryCtrl.getCountry)
      .put(apiGuard,countryCtrl.editCountry)
      .delete(apiGuard,countryCtrl.deleteCountry);

router.route("/countries")
      .get(countryCtrl.getCountries)
      .post(apiGuard,countryCtrl.createCountry);

router.get("/reset",apiGuard,countryCtrl.reset);
module.exports = router;
