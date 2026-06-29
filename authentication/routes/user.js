const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controller/user");

const router = express.Router();

router.get("/login", (req, res) => {
    return res.render("login");
});

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;