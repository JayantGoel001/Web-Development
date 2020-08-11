
getIndex = function(req, res, next) {
  res.render('index', { title: 'RESTful Routing' });
}

getExample = function(req,res,next) {
    res.render('example',{title:'Example HTTP Requests'});
}

getReqExample = function(req,res,next) {
    res.json({message:'User Made a Get Request'});
}

postReqExample = function(req,res,next) {
    res.json({message:'User Made a POST Request'});
}

putReqExample = function(req,res,next) {
    res.json({message:'User Made a PUT Request'});
}

deleteReqExample = function(req,res,next) {
    res.json({message:'User Made a DELETE Request'});
}

module.exports = {
    getIndex,
    getExample,
    getReqExample,
    postReqExample,
    putReqExample,
    deleteReqExample
}
