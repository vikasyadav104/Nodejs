const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
    },
   email:{
    type: String,
    required: true,//it make sure that it is necessary to be there
    unique: true,  //it make sure that email should be unique

   },
   jobTitle :{
    type: String,
   },
   gender:{
    type: String,
   },

},

   {timestamps: true} //this will give update time that in which time you create your post and which time you update it
)

const User = mongoose.model("user", userSchema)
module.exports= User;