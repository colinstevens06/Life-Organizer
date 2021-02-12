import React, { useState, useEffect } from "react";
import API from '../utils/API'

// Firebase Auth
import fire from '../utils/fire'

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'

function Main() {
  const [dbRefreshVariant, setDbRefreshVariant] = useState(false)
  const [userID, setUserID] = useState()
  const [userNotes, setUserNotes] = useState()
  const [browserSet, setBrowserSet] = useState(false)


  useEffect(() => {
    getUserInfo()
  }, [])

  useEffect(() => {
    console.log(userID)
    if (browserSet === false && userID) {
      updateBrowser(userID)
    }

    if (userID) {
      getUserNotes(userID)
      console.log("userNotes", userNotes)
    }

  }, [userID])

  const updateBrowser = (id) => {
    if (browserSet === false) {
      // let newURL = window.location.href + id
      // window.document.location.search = id
      setBrowserSet(true)
    }
  }

  const dbRefresh = input => {
    console.log("input on main")
    console.log(input)
    setDbRefreshVariant(input)
  }

  const signOut = () => {
    fire.auth().signOut()
  }

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
        console.log("res.data", res.data)
      })
      .catch(err => console.log(err))
  }





  return (
    <div>
      <CreateNoteBtn
        dbRefreshTrigger={dbRefresh}
        dbRefreshVariant={dbRefreshVariant}
      />
      {userNotes &&
        (userNotes.notes.length >= 1) ? (
          <FilterableData
            dbRefreshTrigger={dbRefreshVariant}
            userNotes={userNotes.notes}
          />
        ) : (
          <div style={{ textAlign: "center", marginTop: 15 }}>Create your first note</div>
        )

      }
      <div className="add-new-note__btn" onClick={signOut}>
        Log Out
      </div>
    </div>
  )
}

export default Main
