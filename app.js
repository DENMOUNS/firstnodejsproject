require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URL);
const swig = require('swig');
const path = require('path');
const bodyParser = require('body-parser'); 
const multer = require('multer');
const { networkInterfaces } = require('os');
const upload = multer();
const PORT = 3000;
const app = express();

async function main(){
    await client.connect();
    console.log('connexion réussie');
    const db = client.db('blog');
    const collection = db.collection('posts');
    // const insert = await collection.insertMany([{ a: 1 }, { b: 2 }]);
    // console.log("document inséré => ", insert);
    var date_time = new Date();
    // try {
    //     const insertData = await collection.insertMany([
    //         {
    //             name: "Test de post4",
    //             slug: "test-de-post-4",
    //             date:date_time,
    //             statut:"old"
    //         },
    //         {
    //             name: "Test de post5",
    //             slug: "test-de-post-5",
    //             date:date_time,
    //             statut:"old"
    //         },
    //         {
    //             name: "Test de post6",
    //             slug: "test-de-post-6",
    //             date:date_time,
    //             statut:"new"
    //         }
    //     ]);
    //     console.log("document inséré =>", insertData);
    // } catch (error) {
    //     throw error;
    // }
    // try {
    //     //const findData = await collection.findOne({ name: "Test de post3" });
    //    // console.log("document trouvé", findData);
    //     const findData = await collection.find({ statut: "old" });
    //     console.log(await findData.toArray());
    // } catch (error) {
    //     throw error;
    // }
    try {
        const update = collection.updateOne({ name: "Test de post5" }, {
            $set: {
            name:"update"
        }});
        console.log(await update);
    } catch (error) {
        throw error;
    }
    // try {
        
    // } catch (error) {
    //     throw error;
    // }
    // try {
        
    // } catch (error) {
    //     throw error;
    // }
    return "la connexion est ok!!"
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

// app.use(express.logger());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static('public'));
// app.engine('html', swig.renderFile)
app.set('views', './view');
app.set('view engine', 'ejs');

// mongoose.connect('mongodb+srv://landry:Test_1234@test.qdnrzuy.mongodb.net/?retryWrites=true&w=majority');


// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

//mise en place du CRUD

app.get('/', (req, res) => {
    const title = "Juste pour ce fucking de toukam";
    const h1 = "Mon super Blog";
    res.render('index', { titles: title,  h1:h1});
});
app.get('/create-post', (req, res) => {
    const data = "Ajout des articles";
    const h1 = "Ajouter un article";
    res.render('create', { data: data,  h1:h1});
});

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
}); 