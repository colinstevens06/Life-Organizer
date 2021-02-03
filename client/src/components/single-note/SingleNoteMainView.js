import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import API from '../../utils/API';



export default function SingleNoteMainView(props) {
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    setFormObject(props.noteObject)
    console.log(formObject)

  }, [props.noteObject])


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function updateNoteObject() {
    updateDB()
  }

  function updateDB() {
    API.updateNote(formObject._id, {
      name: formObject.name,
      category: formObject.category,
      note: formObject.note
    })
  }

  function deleteNote() {
    API.deleteNote(formObject._id);
    window.location.href = "/"
  }



  return (
    <div>
      <form>
        <input value={formObject.name} onChange={handleInputChange} className="header__single-note" name="name" />
        <input value={formObject.category} onChange={handleInputChange} className="subheader__single-note" name="category" />
        <hr />
        <div className="container__update-buttons">
          <div onClick={updateNoteObject}>Save</div>
          <div onClick={deleteNote}>Delete</div>
          <Link to={"/"}>Cancel</Link>
        </div>
        <textarea value={formObject.note} onChange={handleInputChange} className="text__single-note form_update-note" name="note" />
      </form>
    </div>
  )
}
