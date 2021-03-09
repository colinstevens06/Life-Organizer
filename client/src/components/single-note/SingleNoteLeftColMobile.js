import React from "react";
import { Dropdown } from "react-bootstrap";

export default function SingleNoteLeftColMobile(props) {

  return (
    <div className="mobile-container__single-note-left-col">

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">Change Note</Dropdown.Toggle>

        <Dropdown.Menu>

          {props.userNotes &&



            props.userNotes.map(note => (

              <Dropdown.Item
                key={note._id}
                href={"/notes/" + note._id}

              >{note.name}</Dropdown.Item>




            ))
          }
        </Dropdown.Menu>
      </Dropdown>

    </div>
  )
}
