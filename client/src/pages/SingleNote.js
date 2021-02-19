import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateNoteBtn from "../components/CreateNoteBtn";
import SingleNoteLeftCol from "../components/single-note/SingleNoteLeftCol";
import SingleNoteMainView from "../components/single-note/SingleNoteMainView";
import API from "../utils/API";

import fire from '../utils/fire'



export default function SingleNote() {
  const [note, setNote] = useState({})
  const [userID, setUserID] = useState()
  const [userNotes, setUserNotes] = useState()

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    getUserInfo()
  }, [])


  useEffect(() => {
    if (userID) {
      getUserNotes(userID)
      console.log("userNotes", userNotes)
    }

  }, [userID])


  useEffect(() => {

    if (userNotes) {
      console.log("userNotes", userNotes)
      console.log("noteID", id)

      let singleNote = userNotes.filter(note => note._id === id)
      console.log("singleNote", singleNote)
      setNote(singleNote)
    }

  }, [userNotes, id])



  const getUserInfo = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserID(user.uid)
      }
    })
  }

  const getUserNotes = (id) => {
    API.getUser(id)
      .then(res => {
        setUserNotes(res.data)
      })
      .catch(err => console.log(err))
  }



  return (
    <div>
      <CreateNoteBtn />
      <div className="container_single-note-main-window container_notes-list">

        <SingleNoteLeftCol />
        {note.length >= 1 &&
          <SingleNoteMainView
            noteObject={note}
          />

        }
      </div>




    </div>
  )
}
