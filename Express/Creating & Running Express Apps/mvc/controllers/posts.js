const getPosts = function(req,res) {
    res.render("post_templates/posts",{title :"All Post" });
}

const getPost = function({params},res) {
    res.render("post_templates/post",{title :"All Post",id: params.postid });
}

module.exports = {
    getPosts,
    getPost
}
