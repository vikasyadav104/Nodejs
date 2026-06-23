const express=require("express")
const users=require("./MOCK_DATA.json")

const fs= require("fs")
const port=8000;

const app= express();

app.get("/api/users",(req,res)=>{
    console.log(req.headers) //and it gives about headers in terminal
    // res.setHeader('myname', 'Vikas') //as how we can create our own header and check in postman app
     res.setHeader('X-myname', 'Vikas')
    //Always add X in our custom headers
   return res.json(users);
})

app.listen(port, ()=> console.log(`Server Started at ${port}`));

