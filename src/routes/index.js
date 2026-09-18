const express = require("express");

const router = express.Router();

const v1Routes = require("./v1");
const progressRoutes = require("./progress.routes");

router.use("/v1", v1Routes);

router.use("/v1/progress", progressRoutes);

module.exports = router;