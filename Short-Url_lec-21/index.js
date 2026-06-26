const express= require("express")
const app= express();
const URL =require("./models/url")
const {connectToMongoDB}= require("./connect")
const urlRoute= require("./routes/url")

const Port= 8001;

connectToMongoDB( "mongodb://127.0.0.1:27017/short-url")
.then(()=> console.log("Mongo db connected"));

app.use(express.json());
app.use("/url",urlRoute);
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


