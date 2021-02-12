import React from 'react'
import { Link } from "react-router-dom";


export default function DataRow(props) {
  return (
    <Link
      to={"/notes/" + props.id}
      className="row_notes-list notes-list-results" key={props.key}
    >
      <div>{props.name}</div>
      <div>{props.date}</div>
      <div className="result_category">{props.category}</div>
    </Link>
  )
}
