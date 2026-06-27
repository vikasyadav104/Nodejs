const express= require("express")
const app= express();
const path=require("path")
const URL =require("./models/url")
const {connectToMongoDB}= require("./connect")
const urlRoute= require("./routes/url")
const staticRouter= require("./routes/staticRouter")

const Port= 8001;

connectToMongoDB( "mongodb://127.0.0.1:27017/short-url")
.then(()=> console.log("Mongo db connected"));

//after installation of ejs apne express ko bata do aap konsa view engine use krna chahte ho
app.set("view engine","ejs");
app.set("views", path.resolve("./views")); //iska matlb jitni bhi meri views ki files hai vo views waale folder mai hai


app.use(express.json());
app.use(express.urlencoded({extended: false})); ///here we added this middleware
app.use("/url",urlRoute);
app.use("/", staticRouter);

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home',{
        urls: allUrls, //hame yaha or bhi values bhi paas kr skte haaiiii
    }); //now this will open in frontend thst will be write in html code in home of view isi ko kehte hai server file rendering
})

//designing webpage in that way is so much painful so we donot prefer this 
// app.get("/test", async (req, res) => {
//     const allUrls = await URL.find({});

//     return res.end(`
//         <html>
//         <head></head>
//         <body>
//             <ol>
//                 ${allUrls
//                     .map(url => `<li>${url.shortId} - ${url.redirectURL} - ${url.visitHistory.length}</li>`)
//                     .join("")}
//             </ol>
//         </body>
//         </html>
//     `);
// });

//instead of this for server side rendering we use EJS site for our ui

//most first priority is install EJS by npn i EJS



app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        {
            shortId: shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        {
            new: true,
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
});


app.listen(Port, ()=> console.log(`Server Started At ${Port}`));

//Now it create new a id of rndom 8 character on postman plateform


//now we have to do like i insert http://localhost:8001/H5hzNDJc  then it preview a page of thst url


