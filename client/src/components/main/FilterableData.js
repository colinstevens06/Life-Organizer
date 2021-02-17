import React from "react";
import DataRow from "./DataRow";

function FilterableData(props) {

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

      {props.userNotes &&
        props.userNotes.map(note => (
          <DataRow
            key={note._id}
            id={note._id}
            name={note.name}
            category={note.category}
            date={note.lastUpdated.slice(0, 10)}
          />
        ))
      }


    </div>
  )

}



export default FilterableData