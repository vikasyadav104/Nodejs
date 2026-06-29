const mongoose = require("mongoose");

//this is new schema for users
//so this is page for user database

const userSchema = new mongoose.Schema(
  {
    name: {
      //it means type=string
      type: String,
      //and it is required
      required: true,
    },
    email: {
       //it means type=string
      type: String,
        //and it is required

      required: true,
      //it means it will be unique for sure

      unique: true,
    },
    password: {
      //it means typr is string
      type: String,
      // and it is also required
      required: true,
    },
  },
  { timestamps: true }
);
//User is the model for the user collection, and it follow the rules defined in userSchema
const User = mongoose.model("user", userSchema);

module.exports = User;