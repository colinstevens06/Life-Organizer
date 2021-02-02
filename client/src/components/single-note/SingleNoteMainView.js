import React, { useState, useEffect } from 'react'



export default function SingleNoteMainView(props) {
  const [noteValue, setNoteValue] = useState(undefined)


  useEffect(() => {
    setNoteValue(props.noteObject.note)
    console.log("props.noteObject.note")
    console.log(props.noteObject.note)
  }, [props.noteObject.note])

  const handleChange = (event) => {
    setNoteValue(event.target.value)
  }



  return (
    <div>
      <div className="header__single-note">{props.noteObject.name}</div>
      <div className="subheader__single-note">{props.noteObject.category}</div>
      <form>
        <textarea value={noteValue} onChange={handleChange} className="text__single-note form_update-note" />
      </form>
    </div>
  )
}
