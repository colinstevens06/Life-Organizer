import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateNoteBtn from "../components/CreateNoteBtn";
import SingleNoteLeftCol from "../components/single-note/SingleNoteLeftCol";
import SingleNoteMainView from "../components/single-note/SingleNoteMainView";
import API from "../utils/API";


export default function SingleNote() {
  const [note, setNote] = useState({})

  const { id } = useParams()

  useEffect(() => {
    API.getNote(id)
      .then(res => setNote(res.data))
      .catch(err => console.log(err))
  }, [id])



  return (
    <div>
      <CreateNoteBtn />
      <div className="container_single-note-main-window container_notes-list">

        <SingleNoteLeftCol />
        {note &&
          <SingleNoteMainView
            noteObject={note}
          />

        }
      </div>




    </div>
  )
}
