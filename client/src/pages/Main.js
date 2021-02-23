import React, { useState, useEffect } from "react";
import API from '../utils/API'
import { useAuth } from "../context/AuthContext"

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'

function Main() {
  const [userNotes, setUserNotes] = useState()
  const [browserRefresh, setBrowserRefresh] = useState(false)
  const { currentUser, logOut } = useAuth()


  useEffect(() => {

    getUserNotes(currentUser.uid)
  }, [currentUser, browserRefresh])

  // this is good to go and important
  const getUserNotes = (id) => {
    API.getUser(id)
      .then(res => {
        setUserNotes(res.data)
        console.log("res.data", res.data)

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
      <CreateNoteBtn
        uid={currentUser.uid}
        updateAllNotesObject={updateAllNotesObject}
      />
      {userNotes &&
        (userNotes.length >= 1) ? (
          <FilterableData
            userNotes={userNotes}
          />
        ) : (
          <div style={{ textAlign: "center", marginTop: 15 }}>Create your first note</div>
        )

      }
      <div className="add-new-note__btn" onClick={logOut}>
        Log Out
      </div>
    </div>
  )
}

export default Main
