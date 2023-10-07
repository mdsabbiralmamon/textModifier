import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    // enableing Edit/Input Function inside Text Area.
    setText(event.target.value);
  }

  const handleBtnUppercase = ()=>{
    // Setting text to Uppercase.
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleBtnLowercase = ()=>{
    // Setting Text to Lowercase.
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleBtnLoremIpsum = ()=>{
    // Dummy text Generator.
    let newText = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam tellus, porta in libero lobortis, lobortis laoreet est. Nulla congue commodo diam nec mollis. Proin dapibus porta aliquet. Fusce rutrum massa tristique ante porta varius. Mauris maximus felis eget quam volutpat, eget molestie velit consectetur. Praesent mollis, nibh eu sodales fringilla, sem sapien venenatis odio, sed volutpat eros nunc non felis. Nullam sagittis elit eget nibh euismod rutrum. Fusce sapien felis, pharetra sed leo vitae, porta pharetra urna. Donec commodo, nisi non porta dictum, diam tortor molestie odio, non venenatis metus leo eget quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam quis blandit justo. Duis a ligula quis libero consectetur ultrices at eget dolor. Sed finibus nulla lectus, a rhoncus erat dignissim sed. Etiam dui dui, pulvinar ac sollicitudin ut, pretium id tortor. Ut quis blandit lorem. Ut sagittis commodo felis tincidunt sagittis.");
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
          <button className="btn btn-primary mx-1" onClick={handleBtnLoremIpsum}>Add Dummy Texts</button>
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
