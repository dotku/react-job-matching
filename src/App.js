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
    <React.Fragment>
      {talents
        .filter(talent => talent.search(props.pharse))
        .map((talent, key) => (
          <li key={key}>{talent}</li>
        ))}
    </React.Fragment>
  );
}

function Jobs() {
  const jobs = ["front end", "back end", "full stack"];
  // your code here
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>JOB MATCHING</h1>
        <SearchBar />
        <Talents pharse="J" />
      </div>
    </Provider>
  );
}

export default App;
