import React from "react";
import SingleNoteLeftColItem from "./SingleNoteLeftColItem";

export default function SingleNoteLeftCol(props) {

  return (
    <div className="container__single-note-left-col">

      {props.userNotes &&

        props.userNotes.map(note => (
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
