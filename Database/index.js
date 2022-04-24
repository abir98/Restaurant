const express = require("express")
const app = express()

const mongoose = require("mongoose")
var bodyparser = require('body-parser');

app.use(express.json())


mongoose.connect("mongodb://localhost:27017/Restaurant", { useNewUrlParser: true })
    .then(() => {
        console.log("Connected To DataBase !!");
    }).catch(() => {
        console.log("Connection To DataBase Failed !!");
    });

app.use(bodyparser.json());
app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers",
            "Origin ,X-Requested-With ,Content-Type ,Accept,Authorization");
        res.setHeader("Access-Control-Allow-Methods",
            "GET , POST ,PATCH ,DELETE,OPTIONS");
        next();
    });


const UserRoute = require('./ClientRoute/ClientRt')
const OwnerRoute = require('./ClientRoute/Owner')


app.use('/client', UserRoute)
app.use('/owner',OwnerRoute)


app.listen(9999, () => {
    console.log("Server is Running !")
})
