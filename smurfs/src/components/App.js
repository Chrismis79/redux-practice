import React from "react";
import "./App.css";

import Village from '../components/Village';
import SmurfForm from '../components/SmurfForm';


const App = () => {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfForm/>
        <Village />
      </div>
    );
  }


export default App;
