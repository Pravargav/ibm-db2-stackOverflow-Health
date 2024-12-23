


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Filename - server.js

// importing mysql module
import mysql from "mysql"

// configurations for creating mysql connection
const connection = mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'ibmdb2',      // database from which we want to connect our node application
    user: 'root',          // username of the mysql connection
    password: 'lielife24'    ,
    insecureAuth:true   // password of the mysql connection
});

// executing connection
connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connection created with mysql successfully");
    }
});
//===========================================================================>

