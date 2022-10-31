var express = require('express');
var router = express.Router();
const PostModel = require("../model/Post.model");

// import controller                                                                                                                   
const PostController = require("../controller/Post.controller");

// default  route as given in app.js /users or / as below
router.get('/', function(req, res) {
    res.send('Welcome users')
});



router.post('/add-post', PostController.add_post);

router.get('/get-all-posts', PostController.get_post);

router.get('/getpostByFirstName', PostController.get_post_by_first_name);

router.put('/update-post', PostController.update_post_by_id);

router.delete('/delete_post', PostController.delete_post);

module.exports = router;