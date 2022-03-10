
import React, { useState } from 'react';
import './App.css';
import About from './MyComponents/About';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
      <Router>
        <Header title="Texttastic" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
              <Route exact path="/about" element={<About mode={mode}/>} />
            </Route>
            <Route
              exact path="/"
              element={<TextForm heading="Enter your text below" mode={mode} />}
            >
              <Route
                exact
                path="/about"
                element={
                  <TextForm heading="Enter your text below" mode={mode} />
                }
              />
            </Route>
          </Routes>
          {/* <TextForm heading="Enter your text below" mode={mode}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
