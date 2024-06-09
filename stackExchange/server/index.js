import ibm_db from "ibm_db";
let connStr ="DATABASE=bludb;HOSTNAME=fbd88901-ebdb-4a4f-a32e-9822b9fb237b.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;PORT=32731;UID=ntk61170;PWD=9zuNaajgVXGY3ylx;Security=SSL;";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/Qns", (req, res) => {
     const v1=req.query.v1;
     const v2=req.query.v2;
     const v3=req.query.v3;
     const v4=req.query.v4;
  
    console.log(req.query);
    ibm_db.open(connStr, (err, conn) => {
      
      if (err) {
        console.error("Error connecting to the database:", err);
        res.json({ error: "Database connection error" });
        return;
      }
  
      const query = `SELECT *
      FROM QUESTION
      WHERE PRIORITY1 = ?
        AND PRIORITY2 = ?
        AND PRIORITY3 = ?
        AND PRIORITY4 = ?;`;
  
      conn.query(query, [v1, v2, v3, v4], (err, data) => {
        if (err) {
          console.error("Error executing SQL query:", err);
          res.json({ error: "Database query error" });
        } else {
          if (data && data.length > 0) {
            console.log(data);
            res.json(data);
          } else {
            res.json({ error: "Not found" });
          }
        }
  
        conn.close((closeErr) => {
          if (closeErr) {
            console.error("Error closing the database connection:", closeErr);
          }
        });
      });
    });
  });
  
app.listen(5000, () => console.log("Server started!!"));