import React, { useState, useEffect } from "react";
import DataRow from "./DataRow"

import API from "../../utils/API";

function FilterableData(props) {
  const [allNotes, setAllNotes] = useState(undefined)

  useEffect(() => {
    getAPI()
  }, [])

  useEffect(() => {
    getAPI()
  }, [props.dbRefreshTrigger])

  const getAPI = () => {
    API.getNotes()
      .then(res => {
        setAllNotes(res.data)
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="container_notes-list">
      <div className="header_notes-list">Colin's Notes</div>
      <hr />
      <div className="row_notes-list">
        <div className="header__sortable-lists">Name</div>
        <div className="header__sortable-lists">Last Modified</div>
        <div className="header__sortable-lists">Category</div>
      </div>
      <hr style={{ marginBlockEnd: 0 }} />
      {allNotes &&

        allNotes.map(note => (
          <DataRow
            key={note._id}
            id={note._id}
            name={note.name}
            category={note.category}
            date={note.lastUpdated.slice(0, 10)}
          />
        )

        )


      }
    </div>
  )

}



export default FilterableData