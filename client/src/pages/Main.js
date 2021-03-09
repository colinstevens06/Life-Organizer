import React, { useState, useEffect } from "react";
import API from '../utils/API'
import { useAuth } from "../context/AuthContext"

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'

function Main() {
  const [userNotes, setUserNotes] = useState()
  const [browserRefresh, setBrowserRefresh] = useState(false)
  const { currentUser } = useAuth()


  useEffect(() => {
    getUserNotes(currentUser.uid)
  }, [currentUser, browserRefresh])

  // this is good to go and important
  const getUserNotes = (id) => {
    API.getUser(id)
      .then(res => {
        setUserNotes(res.data)
      })
      .catch(err => console.log(err))
  }

  const updateAllNotesObject = () => {

    if (browserRefresh) {
      setBrowserRefresh(false)
    } else {
      setBrowserRefresh(true)
    }
  }


  return (
    <div>
      {userNotes &&
        <>
          <CreateNoteBtn
            uid={currentUser.uid}
            updateAllNotesObject={updateAllNotesObject}
          />
          {

            (userNotes.length >= 1) ? (
              <FilterableData
                userNotes={userNotes}
              />
            ) : (
              <div className="no-notes-container">
                <h1>Life Organizer</h1>
                <p>Life feeling a bit messy lately? Can't keep track of your best ideas? Does that to-do list seem like it never gets finished, because you can't remember what was on it?</p>
                <p>We've got your back.</p>
                <p>With our state-of-the-art Life Organizer, you'll never forget anything again!</p>
                <p>Get started by creating your first note using the button at the top of your screen.</p>
              </div>
            )
          }

        </>
      }
    </div>
  )
}

export default Main
