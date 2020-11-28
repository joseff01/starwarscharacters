import './App.css' ;
import React from 'react'
import Starwarspeople from "./starwarspeople";

export default class App extends React . Component {
  render() {
    return (
        < div className="App">
          <Starwarspeople></Starwarspeople>
        </ div>
    );
  }
}

