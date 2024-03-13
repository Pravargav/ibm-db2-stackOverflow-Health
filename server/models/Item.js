import mongoose from "mongoose";

const userObj = new mongoose.Schema({
  emailId: { type: String,unique:true },
});

const bidObj = new mongoose.Schema({
  uId: { type: String, ref: "User" },
  uAmnt: Number,
});

const pSchema = new mongoose.Schema({
  pId: {
    type: Number,
    required: true,
    unique: true,
  },
  pImage: {
    type: String,
    required: true,
  },
  pName: {
    type: String,
    required: true,
  },
  predefDate: {
    type: Date,
    required: true,
  },
  predefTime: {
    type: String,
    required: true,
  },
  started: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  live: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
});

// Define the User schema containing an array of posts

const User = mongoose.model("User", userObj);

// Define the Bid model based on the Bid schema
const Bid = mongoose.model("Bid", bidObj);

// Define the Post model based on the Post schema
const Productx = mongoose.model("Productx", pSchema);

export { User, Bid, Productx };
