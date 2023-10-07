import React from 'react'

export default function textForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label className="form-label">{props.details}</label>
            <textarea className="form-control" id="textMainBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to Uppercase</button>
    </div>
  )
}
