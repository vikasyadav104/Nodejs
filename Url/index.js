const http = require("http");
//import modules
//1- import http module for create a web server

const fs = require("fs");
//it import file system module
//1-create file 2-read fiile etc
const url = require("url");
//this module have job to seperte url into parts


const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()} : ${req.url} New req\n`;
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);
    //http://localhost:8000/search?search_query=just+play url is in this way then

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log(err);
            return res.end("Internal Server Error");
        }
 // for ex pathname: '/search',
        switch (myUrl.pathname) {
            case "/":
                res.end("Homepage");
                break;

            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hey ${username}`);
                break;
                // http://localhost:8000/about?myname=vikas
                //then it will print hey vikas

                case "/search":
                    const search= myUrl.query.search_query;
                    res.end("here are your results for" + search);

                    //http://localhost:8000/search?search_query=just+play+tic+tac+toe after entering this
                    //you will get here are your results forjust play tic tac toe

            default:
                res.end("404 Error");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started"));