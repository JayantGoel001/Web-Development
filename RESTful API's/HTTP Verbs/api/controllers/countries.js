getCountries = function(req, res, next) {
    res.statusJson(200, { message: "Get All Countries" });
}

getCountryForm = function(req, res, next) {
    res.statusJson(200, { message: "Get Create Country form" });
}

createCountry = function(req, res, next) {
    res.statusJson(201, { message: "Create New Country" });
}

getCountry = function(req, res, next) {
    res.statusJson(200, { message: "Get Specific Country" });
}

getEditCountryForm = function(req, res, next) {
    res.statusJson(200, { message: "Get The Form For Editing A Country" });
}

editCountry = function(req, res, next) {
    res.statusJson(201, { message: "Edit Specific Country" });
}

deleteCountry = function(req, res, next) {
    res.statusJson(204, { message: "Delete Specific Country" });
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
