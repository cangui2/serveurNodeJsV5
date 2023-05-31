
const dbConfig =require('./config/db.config');
const mongoose =require('mongoose')
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
//const app = express(credentials);
app.use(cors());
// setup des port

const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended:true}))

app.use(bodyParser.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


mongoose.Promise=global.Promise;

// connect database

mongoose.connect('mongodb://localhost:27017/node-expres-api', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// Create a version file every time the database is updated


async function main() {
    //await mongoose.connect('mongodb://AdminSammy:GHT30k7!@localhost:27017/admin');
    //await mongoose.connect('mongodb://cangui:Canguilieme1@localhost:27017/admin');
    // await mongoose.connect('mongodb://localhost:27017/node-expres-api')
}
main()
    .then((client)=>{
        console.log("succes db connect")
    })
    .catch(err => console.log(err));

app.get('/',(req,res) =>{
    res.json({"message":"hello world"});
} );

app.listen(port,()=>{
    console.log(`node server is listening on port ${port}`);
    console.log(process.env.TOKEN_KEY);
});