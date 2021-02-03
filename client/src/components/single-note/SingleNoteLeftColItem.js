import React from 'react'
import { Link } from "react-router-dom";


export default function SingleNoteLeftColItem(props) {

  // let id
  return (
    <Link
      to={"/notes/" + props.id}
      className="row__left-column-list"
    // {
    //   (props.id === )
    // }

    >
      {props.name}
    </ Link >
  )
}
