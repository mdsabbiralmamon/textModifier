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

  const handleBtnLowercase = ()=>{
    // console.log("Convert to uppercase button was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleBtnClearText = ()=>{
    // console.log("Clear text button clicked");
    let newText = ("");
    setText(newText)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container my-3'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <label className="form-label">{props.details}</label>
              <textarea className="form-control" value={text} onChange={handleOnChange} id="textMainBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleBtnUppercase}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleBtnLowercase}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleBtnClearText}>Clear Text</button>
      </div>
      <div className="container my-3">
          <h1>Your Text Summery:</h1>
          <p>The text you pasted or typed above is containing {text.split(" ").length} words and {text.length} Characters.</p>
          <p>{0.008 * (text.split(" ").length)} Minutes to read.</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  )
}
