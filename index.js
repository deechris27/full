const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://mongo:27017/fullstack_dockerized',
   {useNewUrlParser:true})
   .then(()=>{
       console.log("DB connection successful")
   })
   .catch((err)=>{
       console.log(err)
 });

const fromDB = require('./model/item');

app.get('/', (req, res)=>{
    fromDB.find()
    .then(items=>res.send("hello")) //for test
    .catch(err=> res.status(404).json({msg: 'Not Found'}))
});

app.post('/item/add', (req, res)=>{
    const newItem = new fromDB({
        name: req.body.name
    });

    newItem.save().then(item=> res.redirect('/'));
});

const port = 4000 || process.env.PORT;

app.listen(port, ()=>console.log('Server Listening to port 4000...'));