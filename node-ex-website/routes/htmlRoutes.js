const path = require("path");
const router = require("express").Router();

router.get("/node-ex-website/express/index.html", (_req, res) => {
    res.sendFile(path.join(__dirname, "./htmlRoutes.js"));
});

router.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "./htmlRoutes.js"));
});

module.exports = router;