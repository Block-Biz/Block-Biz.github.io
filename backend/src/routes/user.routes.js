const { registerUser } = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/register", registerUser);

module.exports = router;
