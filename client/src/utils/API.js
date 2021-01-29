import axios from "axios"

const API = {
  getNotes: function () {
    return axios.get("/api/notes")
  },

  getNote: function (id) {
    return axios.get("/api/notes/" + id)
  },

  addNote: function (note) {
    return axios.post("/api/notes", note)
  }
}

export default API