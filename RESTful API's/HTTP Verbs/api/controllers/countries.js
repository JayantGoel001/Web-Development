const mongoose = require("mongoose");
const Country = mongoose.model("Country");

getCountries = function(req, res, next) {
    Country.find((err,countries)=>{
        if(err){
            return res.json({error:err});
        }
        res.statusJson(200, {
            message: "Get all Countries",
            countries:countries });
    });
}

getCountryForm = function(req, res, next) {
    res.render("form",{title:"Create A Country"});
}

createCountry = function({body}, res, next) {
    if (!body.name) {
        return res.statusJson(400,{message:"Missing name for the country"});
    }
    country = {name:body.name}
    Country.create(country,(err,newCountry)=>{
        if(err){
            return res.json({error:err});
        }
        res.statusJson(201,{
            message:"Created New Country",
            newCountry:newCountry
        });
    });
}

getCountry = function({params}, res, next) {
    Country.findById(params.countryid,(err,country)=>{
        if(err){
            return res.json({error:err});
        }
        res.statusJson(200, {
                 message: "Get Specific Country",
                 country:country
             });
    })
}

getEditCountryForm = function({params}, res, next) {
    Country.findById(params.countryid,(err,country)=>{
        if(err){
            return res.json({error:err});
        }
        res.render("form",{title:"Edit a Country.",country:country});
    });
}
editCountry = function({body,params}, res, next) {
    if (!body.name) {
        return statusJson(400,"Missing name for Country.");
    }
    Country.findById(params.countryid,(err,country)=>{
        if(err){
            return res.json({error:err});
        }
        if (!country) {
            return statusJson(400,{message:"Could not find country"});
        }
        country.name = body.name;
        country.save((err,updatedCountry)=>{
            res.statusJson(201, { message: "Edit Specific Country",
            country:updatedCountry });
        });
    });
}

deleteCountry = function({params}, res, next) {
    Country.findByIdAndRemove(params.countryid,(err,country)=>{
        if(err){
            return res.json({error:err});
        }
        if (!country) {
            return statusJson({message:"Could Not Find Country."});
        }
        res.statusJson(204,
            { message: "Delete Specific Country",
              country:country});
    });
}

module.exports = {
    getCountries,
    getCountryForm,
    createCountry,
    getCountry,
    getEditCountryForm,
    editCountry,
    deleteCountry
}
