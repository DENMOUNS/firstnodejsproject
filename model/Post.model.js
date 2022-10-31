const mongoose = require("mongoose");

// creating document schema  for collection-> post
var PostSchema = mongoose.Schema({
    title: String,
    description: String,
    created_at: Date,
    slug: String,
    statut: String,
});

// create model after schema creation
var PostModel = mongoose.model("Post", PostSchema);

// export post 
module.exports = PostModel;