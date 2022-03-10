import React from 'react';

export default function About(props) {
  return (
    <div
      className="container-sm mx-auto"
      style={{ color: props.mode === "dark" ? "white" : "#0b1b3c" }}
    >
      <h1>About Us</h1>
      <p>
        TextTastic is a useful text utility that let us perform various function
        to manipulate text. This website is made using React.js, JavaScript, and
        NPM as a self learning project.
      </p>
    </div>
  );
}
