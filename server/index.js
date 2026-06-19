const http= require("http");
const fs= require('fs');
//firslty install package.json by go to server folver 
// and give command npm init

//after that go to script in package.json and write "start": "node index.js"

const myServer= http.createServer((req, res)=>{
    // console.log(req.headers);
    // console.log(req); //this object  give full information about your user like from which computer he use what type of request he gave etc etc....
    // const log=`${Date.now()} : New req\n`; //this is simple way
    //now you can make different url for exampls
    const log = `${Date.now()} : ${req.url} New req\n`;

    fs.appendFile("log.txt",log,(err,data)=>{ //this will create a new file 
        // res.end("Hello form server again");

        switch(req.url){
            case "/":
                res.end("Homepage");
                break;
                case "/about":
                res.end("Hey This is Vikas Yadav")
                break
          default:
            res.end("404 error")
                
        }
    })
    //now if in borwser you write localhost:8000 then it give home page 
    //ig you write localhost:8000/about
     //amnd also log txt file will also get upadte time to time
     


});

myServer.listen(8000,()=>console.log("Server Started"));

