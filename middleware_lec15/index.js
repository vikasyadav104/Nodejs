const express= require("express");
// const users= require("./MOCK_DATA.json");
const fs=require("fs")

const app =express();
const PORT= 8000;

//Middleware -PLUGin

app.use(express.urlencoded({extended: false}));
//we can also make middleware by himself

app.use((req,res,next)=>{
    console.log("hey from middleware 1")
    next()

})
app.use((req,res,next)=>{
    console.log("hey from middleware 2 ")
    next()
})

//you can also append file
app.use((req, res, next) => {
    fs.appendFile(
        "log.txt",
        `\n${req.method}: ${Date.now()}: ${req.path}`,
        (err) => {
            if (err) {
                console.log(err);
            }
            next();
        }
    );
});
app.use((req,res,next)=>{
    console.log("hey from middleware 4 ")
    return res.end("hey")
})

//so it only goes to middleware 4 coz in this middleware there is return function that is not allow to pass through it

app.use((req,res,next)=>{
    console.log("hey from middleware 5 ")
    next()
})

app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`)); 