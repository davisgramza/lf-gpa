import React from 'react';
import './App.css';
import {Calculator} from "./components/calculator"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  );
}

export default App;
