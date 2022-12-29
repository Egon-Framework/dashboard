const express = require("express");
const router = express.Router();

// GET home page
router.get("/", (req, res) => {
  res.render("dashboard", {
    title: req.app.locals.title,
    version: req.app.locals.version
  });
});

module.exports = router;
