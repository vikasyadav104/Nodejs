const User= require("../models/user");

async function handleGetByUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
    
}
async function handleGetByUsersById(req, res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json(user);
    
}
async function handleUpdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, {lastname: "changed"});
    return res.json({status: "Success"});;
}

async function handleDeleteUserById(req, res){
    await User.handleDeleteUserById(req.params.id);
    return res.json({status: "Success"});
}

async function handleCreatenewUser(req,res){
      const body = req.body;
    
        const result = await User.create({
            firstname: body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });
    
        console.log(result);
    
        return res.status(201).json({ msg: "success" });
    
}
module.exports={
    handleGetByUsersById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleGetByUsers,
    handleCreatenewUser,
}
