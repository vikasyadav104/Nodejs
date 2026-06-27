const {nanoid}= require("nanoid"); //this is format
const URL= require("../models/url")


async function handlegenerateNewShortURL(req, res){
    const body=req.body;
    console.log("req.body =", req.body);
    if(!body.url) return res.status(400).json({error: "url is required"})

    //now for this visit npmjs.com
    //now search shortid now click on nanoid
    //then install nano id by npm i nanoid
    const shortID= nanoid(8) //it will make short id of length 8.., i learn from documentation
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
  })

  return res.render("home",{
    id:shortID
  }) //it is for passing the url in frontend

//   return res.json({id :shortID}); //this will return response back to cliet means short id



}
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;   // ✅ correct

    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).json({
            message: "Short URL not found",
        });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports={
    handlegenerateNewShortURL,handleGetAnalytics,
}