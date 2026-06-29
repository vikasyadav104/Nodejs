const jwt = require("jsonwebtoken");
const secret = "Vikas@123";

function setUser(user) {
    return jwt.sign(user.toObject(), secret);
}

function getUser(token) {
    if (!token) return null;

    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};