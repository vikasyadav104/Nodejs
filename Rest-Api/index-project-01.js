const express= require("express");
const users= require("./MOCK_DATA.json");

const app =express();
const PORT= 8000;
//for this firstly we install package.json by npm init
//second install express dependency by npm i express
// after that goto package. json and in script write start= node index.js

//and what i will do i write all the thing in task

//get users;
//but if i routes in html document
//then
// app.get("/users", (req, res) => {
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;

//     res.send(html);
// });

//this routes is in json format

app.get("/api/users", (req, res)=>{
    return res.json(users);
})

//now sesrch users by its id
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);

//     return res.json(user);
// });
app.post("/api/users",(req,res)=>{
    return res.json({status: "pending"})
})
//it is for update
// app.patch("/api/users:id",(req,res)=>{
//     return res.json({status: "pending"})
// })

// //this routes is for dlete
// app.patch("/api/users:id",(req,res)=>{
//     return res.json({status: "pending"})
// })


//so as we see that in dlete patch and get user by id both have same /api/users:id so we can mersge also
app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return res.json(user);
})
.patch((req,res)=>{
    return res.json({status: "pending"})
})

app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`)); 