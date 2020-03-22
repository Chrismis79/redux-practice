import React, { Component } from "react";
import "./App.css";
import PeopleList from './PeopleList';
import AddPersonForm from '../components/AddPersonForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>People</h1>
        <AddPersonForm/>
        <PeopleList/>
      </div>
    );
  }
}

export default App;
