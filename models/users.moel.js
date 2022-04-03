const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {    
      type: String,   
  },  
  mobile: {
    type: Number,
  },
  image: {
    type: String,
  },
  job: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  DOB:{
    type:String,
  }
  
  
});

const usersModel = mongoose.model("users", usersSchema, "users");

module.exports = { usersModel };