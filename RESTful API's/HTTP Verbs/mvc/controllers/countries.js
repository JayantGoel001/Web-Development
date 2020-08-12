const request = require('request');

let domainPath = "http://localhost:3000";
getCountryList = function(req, res, next) {
    const path = "/api/countries";
    const requestOption = {
        url : `${domainPath}${path}`,
        method:"GET"
    };
    request(requestOption,(err,response,body)=>{
        if(err){
            return res.json({error:err});
        }
        let countries = JSON.parse(body).countries;
        if (response.statusCode === 200) {
            return res.render('countries', { title: 'List OF Countries',countries:countries });
        }
        res.json({message:"Something went wrong."});
    });
}
getCountry = function({params}, res, next) {
    const path = `/api/country/${params.countryid}`;
    const requestOption = {
        url : `${domainPath}${path}`,
        method:"GET"
    };
    request(requestOption,(err,response,body)=>{
        if(err){
            return res.json({error:err});
        }
        let country = JSON.parse(body).country;
        if (response.statusCode === 200) {
            return res.render('country', { title: "Country Interface",country:country });
        }
        else {
            res.json({message:"Something went wrong."});
        }
    });
}
createCountry = function({body}, res, next) {
    const path = `/api/countries/`;
    const requestOption = {
        url : `${domainPath}${path}`,
        method:"POST",
        json:{
            name:body.name
        }
    };
    request(requestOption,(err,response,body)=>{
        if(err){
            return res.json({error:err});
        }

        if (response.statusCode === 400) {
            return res.json(body);
        }

        if (response.statusCode === 201) {
            return res.redirect('/countries');
        }
        else {
            res.json({message:"Something went wrong."});
        }
    });
}
editCountry = function({params,body}, res, next) {
    const path = `/api/country/${params.countryid}`;
    const requestOption = {
        url : `${domainPath}${path}`,
        method:"PUT",
        json:{
            name:body.name
        }
    };
    request(requestOption,(err,response,body)=>{
        if(err){
            return res.json({error:err});
        }

        if (response.statusCode === 400) {
            return res.json(body);
        }

        if (response.statusCode === 201) {
            return res.redirect('/countries');
        }
        else {
            res.json({messagess:"Something went wrong."});
        }
    });
}
deleteCountry = function({params}, res, next) {
    const path = `/api/country/${params.countryid}`;
    const requestOption = {
        url : `${domainPath}${path}`,
        method:"DELETE"
    };
    request(requestOption,(err,response,body)=>{
        if(err){
            return res.json({error:err});
        }

        if (response.statusCode === 404) {
            return res.json(body);
        }
        return res.redirect('/countries');
    });
}


module.exports = {
    getCountryList,
    getCountry,
    createCountry,
    editCountry,
    deleteCountry
}
