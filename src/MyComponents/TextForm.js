import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };
    const handleLowerClick = () => {
      setText(text.toLowerCase());
    };
    const handleOnChange = (event) => {
       setText(event.target.value);
    };
    const handleClearClick = (event) => {
      setText("");
    };
    const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb--3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleLowerClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
      <div className="container my-2">
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
