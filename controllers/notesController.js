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

  findById: function (req, res) {
    db.Note
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  findByUID: function (req, res) {
    db.Note
      .find({ fireID: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  addOne: function (req, res) {
    db.Note
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  updateOne: function (req, res) {
    db.Note
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  deleteOne: function (req, res) {
    db.Note
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}