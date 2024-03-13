import mongoose from "mongoose";
import cors from "cors";
import express from "express";
const app = express();
import {
  Productx,
  Bid,
  User,
} from "/downloads/biddingappln/server/models/Item.js";
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://lielife24:lielife24@cluster0.iiianrk.mongodb.net/cllgd1?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);



app.listen(8080, () => {
  console.log("server running on port 8080....");
});
