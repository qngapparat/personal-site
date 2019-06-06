import React, { useState, useEffect } from 'react';
import './App.css';
import { Terminal } from './components/Terminal';
import { Textpage } from './components/Textpage';

const App = () => {

  function initialView() {
    return document.body.clientWidth < 968
     ? "normal"
     : "terminal"
  }

  type View = "terminal" | "normal"
  const [view, setView] = useState<View>(initialView())

  function toggleView() {
    view === "terminal"
      ? setView("normal") 
      : setView("terminal")
  }


  return (
    <div className="App">
      <div className="container mynav">
        <button
          className="btn btn-default mybtn"
          onClick={toggleView}
        >
           Toggle
        </button>
      </div>
      <div className="container main">
        <Terminal
          prompt="/~ "
          initialmsg="Start with `help`"
          onExitTerminal={toggleView}
          visible={view === "terminal"}
        />

        <Textpage 
          visible={view === "normal"}
        />
       
      </div>
    </div>
  )
}

export default App;
