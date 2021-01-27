const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  note: {
    type: String,
    required: true,
    trim: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
})


const Note = mongoose.model("Note", noteSchema)

module.exports = Note;