import React from 'react'

export default function textForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="textMainBox" className="form-label">{props.details}</label>
            <textarea className="form-control" id="textMainBox" rows="3"></textarea>
        </div>
    </div>
  )
}
