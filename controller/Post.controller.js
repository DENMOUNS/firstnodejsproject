// import post model 
const PostModel = require("../model/Post.model");

var time = new Date();
module.exports = {
    add_post : async (req, res) => {
        let newPost = new PostModel({
            title: req.body.title,
            description: req.body.description,
            created_at: date,
            slug: req.body.age,
            statut: active,
        });
        await newPost.save(function (err, newPost) {
            if (err)
                res.send(err);
            else
                res.send({ status: 200, msg: 'post: /add-post  works', postObj: newPost });
        });
    },

    get_post: async (req, res, next) => {
        PostModel.find(function (err, response) {
            if (err)
                res.send(err);
            else
                res.send({
                    status: 200, resultFound: response.length,
                    post: response
                });
        });
    },

    get_post_by_title: async (req, res, next) => {
        const ftitleQuery = req.query.title;
        PostModel.find({ title: titleQuery }, function (err, response) {
            if (err)
                res.send(err);
            else
                res.send({
                    status: 200, resultFound: response.length,
                    post: response
                });
        });
    },
    update_post_by_id: (req, res, next) => {
        const postId = req.query._id;
        PostModel.findByIdAndUpdate(postId, { $set: req.body },
            function (err, response) {
                if (err)
                    res.send(err);
                else
                    PostModel.findById(postId, function (err, response) {
                        res.send(response);
                    });
            });
    },
    delete_post: (req, res, next) => {
        const postid = req.query._id;
        PostModel.findByIdAndDelete(postid, function (err, response) {
            if (err)
                res.send(err);
            else
                console.log("record with  " + postid + "  has been deleted");
            res.send({ status: 200, post: response });
        });
    }
}