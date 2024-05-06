import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleConvertToUpper = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    //show alert message 
    props.showAlert("converted to uppercase","success");
  }
  const handleConvertToLower = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
        //show alert message 
    props.showAlert("converted to lowercase","success");

  }
  const handleClearText = () => {
    const clearText = "";
    setText(clearText);
    props.showAlert("Text has been cleared","success");

  }
  const handleCopyText = () => {
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard successfully","success");

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/); // Corrected regex to match one or more whitespace characters
    setText(newText.join(" "));
    props.showAlert("Successfully removed an extra spaces","success");

  }
  
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode ==='dark'?'black':'white' , color:props.mode ==='dark'?'white':'black' }}>
      {/* Textform props */}
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} rows="5" style={{backgroundColor:props.mode ==='light'?'white':'black', color:props.mode==='light'?'black':'white'}} onChange={(e) => setText(e.target.value)}>

        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleConvertToUpper}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleConvertToLower}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>
      Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>
      Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
      Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='light'?'black':'white'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Enter some text in textbox to preview here'}</p>
    </div>
    </>
  );
}
