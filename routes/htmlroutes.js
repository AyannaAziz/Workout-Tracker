// Dependencies
// =============================================================
const router = require("express").Router();
const path = require("path");

// Routes
// =============================================================

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;

/*
// Basic route that displays exercise.html
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// // Basic route that displays stats.html
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
}); */
