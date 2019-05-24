import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function SearchBar() {
  return <input />;
}

function Talents(props) {
  const talents = ["John", "Jerry", "Merry"];
  return (
    <div>
      <h2>Talents</h2>
      <React.Fragment>
        {talents
          .filter(talent => !talent.search(props.pharse))
          .map((talent, key) => (
            <li key={key}>{talent}</li>
          ))}
      </React.Fragment>
    </div>
  );
}

function Jobs() {
  const jobs = ["front end", "back end", "full stack"];
  // your code here
  return <div>
    <h2>Jobs</h2>
  </div>;
}

function App() {
  let phrase = "";
  return (
    <div className="App">
      <h1>JOB MATCHING</h1>
      <SearchBar />
      <Talents />
      <Jobs />
    </div>
  );
}

export default App;
