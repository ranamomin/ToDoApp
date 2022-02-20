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
    const handleCopyClick = (event) => {
      let text = document.getElementById("myBox");
      text.select()
      try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
        let button = document.getElementById("btnCopyID");
        let buttonText = button.textContent;
        let btnClassname = button.className;
        
        // Copy Text
        button.innerText = "Copied!";
        // btn btn-primary my-3 mx-2
        button.className = "btn btn-success my-3 mx-2";
        setTimeout(()=>{
          button.innerText = buttonText ;
          button.className = btnClassname;
        },2000)

      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
    };
    const handleRemoveExtraSpacesClick = () =>{
      // using regex to look for more than 1 space and split the text into an array
      let newText = text.split(/[  ]+/);
      // join the array with single space
      setText(newText.join(" "));

    }

    const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0b1b3c" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb--3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "dark" ? "white" : "#0b1b3c",
            }}
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
          onClick={handleRemoveExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          id="btnCopyID"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#0b1b3c" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#0b1b3c" }}
      >
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
      </div>
    </>
  );
}
