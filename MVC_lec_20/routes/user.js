//this page is responsible for all routers

const express = require("express");
const router = express.Router();

const User = require("../models/user");

const {
    handleGetByUsersById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleGetByUsers,
    handleCreatenewUser,
} = require("../controllers/user");

// If you're using controllers, use them here instead of writing async functions.

router.route("/")
    .get(handleGetByUsers)
    .post(handleCreatenewUser);

router.route("/:id")
    .get(handleGetByUsersById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;