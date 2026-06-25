const express= require("express")
const fs= require("fs")
// const users= require("./MOCK_DATA.json")

const Port=8000;
const mongoose = require("mongoose")

const app= express();

//Middleware -PLUGin
app.use(express.json()); //this is must, without this req.body will be undefined for JSON requests from Postman
app.use(express.urlencoded({extended: false})); //this is for form-urlencoded data (html forms)

//Connection
mongoose.
connect("mongodb://127.0.0.1:27017/youtube-app-1") //this link got by terminal when we write mangosh into it

.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log("Mango Error", err));
 
//now again open terminal
//here after enter mongosh and we get link then enter use dbs
//after that you will eneter show dbs then below 4 things will be open
/*
admin          40.00 KiB
config         72.00 KiB
local          40.00 KiB
youtube-app-1  12.00 KiB (this is new dbs formed)
*/
//after that you will enter  use youtube-app-1
// then show collections
//users will displayes into your screen
//then search db.users.find({})
//then an empty line will shown that means currently you have no data
//so for make the data this post function will made

//CREATE SCHEMA
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

app.post("/api/users", async(req, res) => {
    const body = req.body;
    // console.log('Body',body); //here if we use directly body then undefined will be shown so that is why we use


    //hame yaha ye nahi krna
    // users.push({ ...body, id: users.length + 1 }); //this spread operator is used to merge id into it 

    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    //     if (err) {
    //         return res.status(500).json({ status: "Error writing file" });
    //     }

    //     return res.json({ status: "success", id: users.length });
    // });
    //this post is create in postman app just check it out and you can make more

    /*
    //Middleware -PLUGin

     app.use(express.urlencoded({extended: false}));
    */

    // return res.json({status: "pending"})


   const result = await User.create({
    firstname: body.first_name,
    lastname: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
   })
   console.log(result)
   return res.status(201).json({msg: "success"});

   //now this will add firstname lastname email jobtitile gender into your terminal
 
});
    app.get("/users", async(req, res)=>{
        const allDbUsers =await User.find({});
        const html= `
        <ul>
        ${allDbUsers.map((user)=> `<li> ${user.firstname}-${user.email}</li>`)}
        </ul>
        `;
        res.send(html);

    }); //it give /*Vikas-vikasyadavskb247@gmail.com  john-john@gmail.com   */ coz currently we have two data

    ///similarly we can do all operation by this ways like byid and also other thingss
    
app.listen(Port,()=> console.log(`Server Connected at ${Port}`));