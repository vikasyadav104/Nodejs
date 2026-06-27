const mongoose = require("mongoose")

const urlSchema= new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectURL :{
        type: String,
        required: true,
    },
    visitHistory: [{timestamp: {type: Number}},]
},
{timestamps: true}

);

const URL= mongoose.model('url', urlSchema) //a model is an obeject through  which you can interact woth MongoDB.


module.exports=URL;
