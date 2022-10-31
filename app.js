require('dotenv').config();
const express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const client = new MongoClient(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);
const swig = require('swig');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const { networkInterfaces } = require('os');
const upload = multer();
const app = express();

const PORT = 3000;


//import 
const PostModel = require("./model/Post.model");
const PostRouter = require('./routes/post.route');
app.use('/posts', PostRouter);

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static('public'));
app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const title = "Juste pour ce fucking de toukam";
    const h1 = "Mon super Blog";
    res.render('index', { titles: title, h1: h1 });
});

app.get('/create-post', (req, res) => {
    const data = "Ajout des articles";
    const h1 = "Ajouter un article";
    res.render('create', { data: data, h1: h1 });
});

app.get('/fuck-toukam', (req, res) => {
    const h1 = "Ton gros q gar";
    const data = "Tu as mal je t'ai eu lol";
    res.render('toukam', { data: data, h1: h1 });
});

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
}); 