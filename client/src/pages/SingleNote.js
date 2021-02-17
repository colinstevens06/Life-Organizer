import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateNoteBtn from "../components/CreateNoteBtn";
import SingleNoteLeftCol from "../components/single-note/SingleNoteLeftCol";
import SingleNoteMainView from "../components/single-note/SingleNoteMainView";
// import API from "../utils/API";


export default function SingleNote(props) {
  const [note, setNote] = useState({})

  const { id } = useParams()


  useEffect(() => {

    console.log("id", id)
    console.log("props.uid", props.uid)
    console.log("props.allNotes", props.allNotes)


    

    let allNotes = props.allNotes
    let singleNote = allNotes.filter(note => note._id === id)
    console.log("singleNote", singleNote)
    setNote(singleNote)

  }, [id])

  // useEffect(() => { console.log("Note Set") }, [note])



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
