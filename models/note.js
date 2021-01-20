const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: Date,
    required: true
  }
})


const Note = mongoose.model("Note", noteSchema)

module.exports = Note;