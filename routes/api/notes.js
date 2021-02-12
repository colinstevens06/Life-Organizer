const router = require("express").Router();
const notesController = require("../../controllers/notesController")

// Matches with "/api/notes"

router.route("/")
  .get(notesController.findAll)
  .post(notesController.addOne)

router.route("/:id")
  // .get(notesController.findById)
  .get(notesController.findByUID)
  .put(notesController.updateOne)
  .delete(notesController.deleteOne)

module.exports = router;