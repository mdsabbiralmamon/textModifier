import React from 'react'

export default function textForm() {
  return (
    <div>
        <div className="mb-3">
            <label for="textMainBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="textMainBox" rows="3"></textarea>
        </div>
    </div>
  )
}
