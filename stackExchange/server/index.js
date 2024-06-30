import ibm_db from "ibm_db";
let connStr =
  "DATABASE=bludb;HOSTNAME=fbd88901-ebdb-4a4f-a32e-9822b9fb237b.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;PORT=32731;UID=ntk61170;PWD=9zuNaajgVXGY3ylx;Security=SSL;";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//===========================================================================>

app.post("/askQuestion", async (req, res) => {
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }

    const paramx = {
      questionid: req.body.quesid,
      patientid: req.body.patientId,
      text: req.body.text,
      priority1: req.body.p1,
      priority2: req.body.p2,
      priority3: req.body.p3,
      priority4: req.body.p4,
    };

    const sql4 =
      "INSERT INTO question(questionid,patientid,text,priority1,priority2,priority3,priority4) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const params2 = [
      paramx.questionid,
      paramx.patientid,
      paramx.text,
      paramx.priority1,
      paramx.priority2,
      paramx.priority3,
      paramx.priority4,
    ];

    conn.prepare(sql4, (err, stmt) => {
      if (err) {
        console.error("Error preparing the statement:", err);
        conn.close();
        return;
      }

      stmt.execute(params2, (err, result) => {
        if (err) {
          console.error("Error inserting :", err);
        } else {
          console.log("inserted successfully:", result);
        }
      });

      stmt.close(() => {
        conn.close();
      });
    });
  });
});

app.post("/responseAnswer", async (req, res) => {
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }

    const paramx = {
      questionid: req.body.quesid,
      doctorid: req.body.doctorId,
      answerid: req.body.ansid,
      text: req.body.text,
      votes: req.body.votes,
    };
    console.log(paramx);
    const sql4 =
      "INSERT INTO answer(questionid, doctorid,  answerid, text,votes) VALUES (?, ?, ?, ?, ?)";
    const params2 = [
      paramx.questionid,
      paramx.doctorid,
      paramx.answerid,
      paramx.text,
      paramx.votes,
    ];

    conn.prepare(sql4, (err, stmt) => {
      if (err) {
        console.error("Error preparing the statement:", err);
        conn.close();
        return;
      }

      stmt.execute(params2, (err, result) => {
        if (err) {
          console.error("Error inserting :", err);
        } else {
          console.log("inserted successfully:", result);
        }
      });

      stmt.close(() => {
        conn.close();
      });
    });
  });
});
//---------------------------------------------------------------------------------->

app.get("/Query", (req, res) => {
  const v1 = req.query.v1;
  const v2 = req.query.v2;
  const v3 = req.query.v3;
  const v4 = req.query.v4;

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
          console.log(data);
          res.json(["Not found"]);
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

app.get("/Query/:questionid", (req, res) => {
  const questionId = req.params.questionid;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM answer WHERE questionid = ?`;

    conn.query(query, [questionId], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
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

//---------------------------------------------------------------------------->

app.post("/signup-patient", async (req, res) => {
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      return console.log(err);
    }

    const paramx = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      patientid: req.body.patientid,
    };

    const sql2 =
      "INSERT INTO patient(email, password, name, patientid) VALUES (?, ?, ?, ?)";
    const params2 = [
      paramx.email,
      paramx.password,
      paramx.name,
      paramx.patientid,
    ];

    conn.prepare(sql2, (err, stmt) => {
      if (err) {
        console.error("Error preparing the statement:", err);
        conn.close();
        return;
      }

      stmt.execute(params2, (err, result) => {
        if (err) {
          console.error("Error inserting :", err);
        } else {
          console.log("inserted successfully:", result);
        }
      });

      stmt.close(() => {
        conn.close();
      });
    });
  });
});

app.post("/signup-doctor", async (req, res) => {
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }

    const paramx = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      doctorid: req.body.doctorid,
      mobilenum: req.body.mobilenum,
      address: req.body.address,
      specialisation: req.body.specialisation,
      experience: req.body.experience,
    };

    const sql4 =
      "INSERT INTO doctor(email, password, name, doctorid, mobilenum, address, specialisation, experience) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const params2 = [
      paramx.email,
      paramx.password,
      paramx.name,
      paramx.doctorid,
      paramx.mobilenum,
      paramx.address,
      paramx.specialisation,
      paramx.experience,
    ];

    conn.prepare(sql4, (err, stmt) => {
      if (err) {
        console.error("Error preparing the statement:", err);
        conn.close();
        return;
      }

      stmt.execute(params2, (err, result) => {
        if (err) {
          console.error("Error inserting :", err);
        } else {
          console.log("inserted successfully:", result);
        }
      });

      stmt.close(() => {
        conn.close();
      });
    });
  });
});

app.post("/login-patient", async (req, res) => {
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error opening the database connection:", err);
      return res.json({ message: "fail" });
    }

    const sql = `SELECT * FROM patient WHERE email = ?`;

    conn.query(sql, [req.body.email], (err, data) => {
      if (err) {
        console.error("Error executing the query:", err);
        conn.close(() => {
          console.log("Connection closed.");
          return res.json({ message: "fail" });
        });
      } else {
        if (data.length === 0) {
          conn.close(() => {
            console.log("Connection closed.");
            return res.json({ message: "fail" });
          });
        } else {
          const datax = data[0];
          console.log(datax);
          console.log(req.body.password);
          if (req.body.password === datax.PASSWORD) {
            res.json({ message: "success", id: datax.PATIENTID });
          } else {
            console.error("fail: object!");
            res.json({ message: "fail" });
          }

          conn.close(() => {
            console.log("Connection closed.");
          });
        }
      }
    });
  });
});

app.post("/login-doctor", async (req, res) => {
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error opening the database connection:", err);
      return res.json({ message: "fail" });
    }

    const sql = `SELECT * FROM doctor WHERE email = ?`;

    conn.query(sql, [req.body.email], (err, data) => {
      if (err) {
        console.error("Error executing the query:", err);
        conn.close(() => {
          console.log("Connection closed.");
          return res.json({ message: "fail" });
        });
      } else {
        if (data.length === 0) {
          conn.close(() => {
            console.log("Connection closed.");
            return res.json({ message: "fail" });
          });
        } else {
          const datax = data[0];
          console.log(datax);
          console.log(req.body.password);
          if (req.body.password === datax.PASSWORD) {
            res.json({ message: "success", id: datax.DOCTORID });
          } else {
            console.error("fail: object!");
            res.json({ message: "fail" });
          }

          conn.close(() => {
            console.log("Connection closed.");
          });
        }
      }
    });
  });
});

//----------------------------------------------------------------------------->

app.get("/doctorProfile/:doctorId", (req, res) => {
  const doctorid = req.params.doctorId;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM doctor WHERE doctorid = ?`;

    conn.query(query, [doctorid], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
          res.json(data[0]);
        } else {
          res.json({ error: "Doctor not found" });
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

app.get("/patientProfile/:patientId", (req, res) => {
  const patientid = req.params.patientId;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM patient WHERE patientid = ?`;

    conn.query(query, [patientid], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
          res.json(data[0]);
        } else {
          res.json({ error: "Doctor not found" });
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

app.get("/:doctorId", (req, res) => {
  const doctorId = req.params.doctorId;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM doctor WHERE doctorid = ?`;

    conn.query(query, [doctorId], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
          res.json(data[0]);
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

app.get("/:patientId", (req, res) => {
  const patientId = req.params.patientId;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM patient WHERE patientid = ?`;

    conn.query(query, [patientId], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
          res.json(data[0]);
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

app.get("/stackExchange/d/:doctorId", (req, res) => {
  const doctorId = req.params.doctorId;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM answer WHERE doctorid = ?`;

    conn.query(query, [doctorId], (err, data) => {
      if (err) {
        console.log(doctorId);
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

app.get("/stackExchange/p/:patientId", (req, res) => {
  const patientId = req.params.patientId;
  console.log(patientId);
  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM question WHERE patientid = ?`;

    conn.query(query, [patientId], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
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

app.get("/stackExchange/pt/:questionid", (req, res) => {
  const questionId = req.params.questionid;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * FROM answer WHERE questionid = ?`;

    conn.query(query, [questionId], (err, data) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.json({ error: "Database query error" });
      } else {
        if (data && data.length > 0) {
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

app.get("/stackExchange/dr/:answerid", (req, res) => {
  const answerId = req.params.answerid;

  ibm_db.open(connStr, (err, conn) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.json({ error: "Database connection error" });
      return;
    }

    const query = `SELECT * from question where questionid = (SELECT questionid from answer where answerid = ?)`;

    conn.query(query, [answerId], (err, data) => {
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
//-------------------------------------------------------------------------------->

app.listen(5000, () => console.log("Server started!!"));
