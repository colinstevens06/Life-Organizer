const router = require("express").Router();
const noteRoutes = require("./notes")

// Notes routes
router.use("/notes", noteRoutes)

module.exports = router;