
getIndex = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}

getExample = function(req,res,next) {
    res.render('example',{title:'Example HTTP Requests'});
}

getReqExample = function(req,res,next) {
    res.statusJson(200,{message:'User Made a Get Request'});
}

postReqExample = function(req,res,next) {
    res.statusJson(201,{message:'User Made a POST Request'});
}

putReqExample = function(req,res,next) {
    res.statusJson(401,{message:'User Made a PUT Request'});
}

deleteReqExample = function(req,res,next) {
    res.statusJson(500,{message:'User Made a DELETE Request'});
}
getRestful = function(req,res) {
    res.render("restful",{title:"RESTful Routing Architecture"});

}

getStatusCode = function(req,res) {
    res.render("status-code",{title:"HTTP Status Code."});
}

module.exports = {
    getIndex,
    getExample,
    getReqExample,
    postReqExample,
    putReqExample,
    deleteReqExample,
    getRestful,
    getStatusCode
}
