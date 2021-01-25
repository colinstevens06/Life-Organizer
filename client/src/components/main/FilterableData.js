import React, { useState, useEffect } from "react";

import API from "../../utils/API";

function FilterableData(props) {
  const [allNotes, setAllNotes] = useState(undefined)

  useEffect(() => {
    console.log(API.getNotes)
    getAPI()
  }, [])

  useEffect(() => {
    if (allNotes !== undefined) {
      console.log("allNotes")
      console.log(allNotes)
    }
  }, [allNotes])



  const getAPI = () => {
    API.getNotes()
      .then(res => {
        console.log("about to setAllNotes in getAPI")
        setAllNotes(res.data)
      })
      .catch(err => console.log(err))
  }



  return (
    <div>

    </div>
  )

}



export default FilterableData