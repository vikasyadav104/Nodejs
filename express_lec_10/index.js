//firslty i make package.json then i install express
const http= require("http");
const express= require("express")

const app=express();
app.get("/",(req,res)=>{
    return res.end("Hello from homepage")

})
app.get("/about",(req,res)=>{
    return res.end("Hello from about page" + "hey" + req.query.name + "you are" + req.query.age)
})

const myServer= http.createServer(app)

myServer.listen(8000, () => console.log("Server Started"));


//so as we see that in  express code become so much easy and less painful that is why we always prefer express over url
