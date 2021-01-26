import React from 'react'

export default function DataRow(props) {
  return (
    <div className="row_notes-list notes-list-results">
      <div>{props.name}</div>
      <div>{props.date}</div>
      <div className="result_category">{props.category}</div>
    </div>
  )
}
