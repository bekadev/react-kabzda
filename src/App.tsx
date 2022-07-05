import React from 'react';
import './App.css';
import {Raiting} from "./components/raiting/Raiting";
import {Accordion} from "./components/accordion/Accordion";

function App() {
  return (
    <div className="App">
        <div>
            <Raiting />
            <Accordion />
        </div>
    </div>
  );
}

export default App;
