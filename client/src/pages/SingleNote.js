import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import CreateNoteBtn from "../components/CreateNoteBtn";
import SingleNoteLeftCol from "../components/single-note/SingleNoteLeftCol";
import SingleNoteMainView from "../components/single-note/SingleNoteMainView";

// Utilities
import API from "../utils/API";
import { useAuth } from '../context/AuthContext'
import SingleNoteLeftColMobile from "../components/single-note/SingleNoteLeftColMobile";

export default function SingleNote() {
  const [note, setNote] = useState({})
  const [userNotes, setUserNotes] = useState()
  const [userMounted, setUserMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [browserRefresh, setBrowserRefresh] = useState(false)


  const { id } = useParams()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!userMounted) {
      getUserNotes(currentUser.uid)

    } else if (browserRefresh === true) {
      getUserNotes(currentUser.uid)
      setBrowserRefresh(false)
    }

    else {
      let newNote = userNotes.filter(note => note._id === id)
      setNote(newNote)
    }
  }, [currentUser, id, browserRefresh])


  function getUserNotes(id) {
    API.getUser(id)
      .then(res => {
        setUserNotes(res.data)
        let thisNote = findThisNote(res.data)
        setNote(thisNote)
        setLoading(false)
        setUserMounted(true)
      })
      .catch(err => console.log(err))
  }

  const findThisNote = (input) => {
    let thisNote = input.filter(note => note._id === id)
    return thisNote
  }

  const updateUserNotes = (input) => {
    let noteToUpdate = input._id
    let noteToUpdateIndex = userNotes.findIndex(obj => obj._id === noteToUpdate)
    userNotes[noteToUpdateIndex] = input

  }

  const updateAllNotesObject = () => {
    setBrowserRefresh(true)
  }



  return (
    <div>
      {(!loading) &&
        <div>
          <div className="mobile-container__top-event-row">
            <CreateNoteBtn
              uid={currentUser.uid}
              updateAllNotesObject={updateAllNotesObject}
            />
            <SingleNoteLeftColMobile
              userNotes={userNotes}
            />

          </div>
          <div className="container_single-note-main-window container_notes-list">

            {userNotes.length >= 1 &&
              <>
                <SingleNoteLeftCol
                  userNotes={userNotes}
                />
              </>


            }



            <SingleNoteMainView
              noteObject={note}
              updateUserNotes={updateUserNotes}
            />

          </div>
        </div>

      }




    </div >
  )
}
