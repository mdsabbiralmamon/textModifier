import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    // console.log("On change triggered")
    setText(event.target.value);
  }
  const handleBtnUppercase = ()=>{
    // console.log("Convert to uppercase button was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const [text, setText] = useState('Enter Text Here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label className="form-label">{props.details}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="textMainBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleBtnUppercase}>Convert to Uppercase</button>
    </div>
  )
}
