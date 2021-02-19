import React, { useState, useEffect } from "react";
import API from '../utils/API'

// Firebase Auth
import fire from '../utils/fire'

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'

function Main(props) {
  const [userID, setUserID] = useState()
  const [userNotes, setUserNotes] = useState()
  const [browserRefresh, setBrowserRefresh] = useState(false)



  useEffect(() => {
    getUserInfo()
  }, [])

  useEffect(() => {
    if (userID) {
      getUserNotes(userID)
      console.log("userNotes", userNotes)
    }


    console.log("browserRefresh", browserRefresh)

  }, [userID, browserRefresh])



  // this is good to go and important
  const signOut = () => {
    fire.auth().signOut()
  }

  // this is good to go and imortant
  const getUserInfo = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserID(user.uid)
      }
    })
  }

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
        uid={userID}
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
      <div className="add-new-note__btn" onClick={signOut}>
        Log Out
      </div>
    </div>
  )
}

export default Main
