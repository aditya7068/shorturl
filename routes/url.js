const express = require("express");
const router = express.Router();
const { handleURL } = require("../controllers/url");
router.post("/", handleURL);
module.exports = router;
