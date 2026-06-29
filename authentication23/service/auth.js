//this Service is for cookies as we have taken that example in which parking man notes map number to cr number 

const sessionIdToUseMap = new Map();

function setUser(id, user){
    sessionIdToUseMap.set(id,user);
}

function getUser(id){
    return sessionIdToUseMap.get(id);
}

module.exports={
    setUser,
    getUser,
};