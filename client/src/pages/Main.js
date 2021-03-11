import React, { useState, useEffect } from "react";
import API from '../utils/API'
import { useAuth } from "../context/AuthContext"

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'
import Sorter from "../utils/sorting";

function Main() {

  // INSTANCES OF NOTES
  const [allUserNotes, setAllUserNotes] = useState()
  const [sortedUserNotes, setSortedUserNotes] = useState()

  // browser refresh
  const [browserRefresh, setBrowserRefresh] = useState(false)

  // sorting the data
  const [sortTypeValue, setSortTypeValue] = useState()
  const [sortAscending, setSortAscending] = useState(false)

  // this will show the column and the direction - example: "name-ascending"
  const [sortTypeOrderValue, setSortTypeOrderValue] = useState()

  // authentication
  const { currentUser } = useAuth()



  useEffect(() => {
    getUserNotes(currentUser.uid)
  }, [currentUser, browserRefresh])

  // this useEffect watches for the sortTypeValue
  useEffect(() => {
    if (allUserNotes) {

      if (sortTypeValue === "name" && sortAscending === true) {

        let sortedNotes = Sorter.aToZName(allUserNotes)
        setSortedUserNotes(sortedNotes)
      } else if (sortTypeValue === "name" && sortAscending === false) {
        let sortedNotes = Sorter.zToAName(allUserNotes)
        setSortedUserNotes(sortedNotes)

      } else if (sortTypeValue === "category" && sortAscending === true) {
        let sortedNotes = Sorter.aToZCategory(allUserNotes)
        setSortedUserNotes(sortedNotes)

      } else if (sortTypeValue === "category" && sortAscending === false) {
        let sortedNotes = Sorter.zToACategory(allUserNotes)
        setSortedUserNotes(sortedNotes)

      } else if (sortTypeValue === "date" && sortAscending === false) {
        let sortedNotes = Sorter.aToZUpDate(allUserNotes)
        setSortedUserNotes(sortedNotes)

      } else {
        let sortedNotes = Sorter.zToAUpDate(allUserNotes)
        setSortedUserNotes(sortedNotes)
      }

    }

  }, [allUserNotes, sortAscending, sortTypeValue])

  // this useEffect updates the data
  useEffect(() => {
    let keyWord = Sorter.keyWord(sortTypeValue, sortAscending)
    setSortTypeOrderValue(keyWord)

  }, [sortAscending, sortTypeValue, sortedUserNotes])



  // this is good to go and important
  const getUserNotes = (id) => {
    API.getUser(id)
      .then(res => {
        setAllUserNotes(res.data)
        setSortedUserNotes(res.data)
      })
      .catch(err => console.log(err))
  }

  // this listens in case a new note is added... if a new note is added, we want to refresh the browser w/ a new API call because we want the note added to the DB w/ a new ID - I'm using the ID as the unique identifier in HTML routing
  const updateAllNotesObject = () => {
    if (browserRefresh) {
      setBrowserRefresh(false)
    } else {
      setBrowserRefresh(true)
    }
  }


  // when a user clicks a sortable column, this listens for that click and tells us which button they clicked.
  const handleSortTypeValueChange = (input) => {

    if (sortTypeValue !== input) {
      setSortAscending(true)
    } else {

      if (sortAscending === false) {
        setSortAscending(true)
      } else {
        setSortAscending(false)
      }
    }

    setSortTypeValue(input)


  }





  return (
    <div>
      {sortedUserNotes &&
        <>
          <CreateNoteBtn
            uid={currentUser.uid}
            updateAllNotesObject={updateAllNotesObject}
          />
          {
            (sortedUserNotes.length >= 1) ? (
              <FilterableData
                handleSortTypeValueChange={handleSortTypeValueChange}
                userNotes={sortedUserNotes}
                sortClass={sortTypeOrderValue}
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
