const db = require("../models")
if (process.env.NODE_ENV != "production") { const dotenv = require("dotenv/config") };


// Defining methods for the notesController
module.exports = {
  findAll: function (req, res) {
    db.Note
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  addOne: function (req, res) {
    db.Note
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}