


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
    database: 'ibmdb2',      
    user: 'root',          // username of the mysql connection
    password: 'lielife24'    ,
    insecureAuth:true   // password of the mysql connection
});

// executing connection
connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected successfully!!");
    }
});





Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:

flush privileges;

Try connecting using node after you do so.

If that doesn't work, try it without @'localhost' part.
