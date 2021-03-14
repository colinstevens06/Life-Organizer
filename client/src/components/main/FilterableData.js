import React from "react";
import DataRow from "./DataRow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


function FilterableData(props) {

  return (
    <div className="container_notes-list">
      <div className="header_notes-list">Your Notes</div>
      <div className="row_notes-list sortable-headers__border">
        <div className="header__sortable-lists" onClick={() => props.handleSortTypeValueChange("name")}>Name&nbsp;
        {props.sortClass === "name-ascending" && <FontAwesomeIcon icon={faSortUp} title="Sort Up" />}
          {props.sortClass === "name-descending" && <FontAwesomeIcon icon={faSortDown} title="Sort Up" />}


        </div>
        <div className="header__sortable-lists" onClick={() => props.handleSortTypeValueChange("date")}>Last Modified&nbsp;
          {props.sortClass === "date-descending" && <FontAwesomeIcon icon={faSortDown} title="Sort Up" />}
          {props.sortClass === "date-ascending" && <FontAwesomeIcon icon={faSortUp} title="Sort Up" />}

        </div>
        <div className="header__sortable-lists" onClick={() => props.handleSortTypeValueChange("category")}>Category&nbsp;
        
          {props.sortClass === "category-descending" && <FontAwesomeIcon icon={faSortDown} title="Sort Up" />}
          {props.sortClass === "category-ascending" && <FontAwesomeIcon icon={faSortUp} title="Sort Up" />}
        </div>
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