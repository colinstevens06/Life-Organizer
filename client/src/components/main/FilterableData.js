import React from "react";
import DataRow from "./DataRow";

function FilterableData(props) {

  return (
    <div className="container_notes-list">
      <div className="header_notes-list">Your Notes</div>
      <div className="row_notes-list sortable-headers__border">
        <div className="header__sortable-lists" onClick={() => props.handleSortTypeValueChange("name")}>Name</div>
        <div className="header__sortable-lists" onClick={() => props.handleSortTypeValueChange("date")}>Last Modified</div>
        <div className="header__sortable-lists" onClick={() => props.handleSortTypeValueChange("category")}>Category</div>
      </div>

      {
        props.userNotes &&
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

    </div >
  )

}

export default FilterableData