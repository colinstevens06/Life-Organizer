import React from "react"

export function Input(props) {
  return (
    <div>
      <input className="form-control" {...props} />
    </div>
  )
}

export function TextArea(props) {
  return (
    <div>
      <textarea rows="20" {...props} />
    </div>
  )
}