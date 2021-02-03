import React, { useState, useEffect } from "react";
import API from '../../utils/API'
import SingleNoteLeftColItem from "./SingleNoteLeftColItem";

export default function SingleNoteLeftCol() {
  const [allNotes, setAllNotes] = useState(undefined)

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = () => {
    API.getNotes()
      .then(res => {
        setAllNotes(res.data)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="container__single-note-left-col">

      {allNotes &&

        allNotes.map(note => (
          <SingleNoteLeftColItem
            key={note._id}
            id={note._id}
            name={note.name}

          />

        ))
      }

    </div>
  )
}
