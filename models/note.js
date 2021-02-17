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
  note: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  fireID: {
    type: String,
    required: true
  },
})

// const userSchema = new Schema({
//   email: {
//     type: String
//   },
//   fireID: {
//     type: String
//   },
//   notes: [noteSchema]
// })


const Note = mongoose.model("Note", noteSchema)

module.exports = Note;