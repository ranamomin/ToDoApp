
import React, { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';


function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#0b1b3c';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Header title="Texttastic" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter your text below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
