import React from 'react'
import DataRow from './DataRow'

export default function DataRowContainer(props) {


  return (
    <div>
      {props.allNotes &&
        props.allNotes.map(note => (
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