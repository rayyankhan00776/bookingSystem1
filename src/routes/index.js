const express = require("express");

const apiRoutes = require("./v1");

const router = express.Router();

router.use("/v1", apiRoutes);

module.exports = router;
