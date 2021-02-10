import React, { useState, useEffect } from "react";

// Firebase Auth
import fire from '../utils/fire'

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'

function Main() {


  useEffect(() => {
    getUserInfo()
  }, [])

  const [dbRefreshVariant, setDbRefreshVariant] = useState(false)
  const [userID, setUserID] = useState()

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
        console.log(user)
        console.log(user.uid)
        setUserID(user.uid)
      }
    })
  }



  return (
    <div>
      <CreateNoteBtn
        dbRefreshTrigger={dbRefresh}
        dbRefreshVariant={dbRefreshVariant}
      />
      <FilterableData
        dbRefreshTrigger={dbRefreshVariant}
      />
      <div className="add-new-note__btn" onClick={signOut}>
        Log Out
      </div>
    </div>
  )
}

export default Main
