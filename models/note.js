const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const noteSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'Note',
    required: true,
    unique: true,
    default: function () { return Math.floor(Math.random() * 1000000000000) }

  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
})

const userSchema = new Schema({
  email: {
    type: String
  },
  fireID: {
    type: String
  },
  notes: [noteSchema]
})


const Note = mongoose.model("Note", userSchema)

module.exports = Note;