import { createStore} from "redux";
import { Provider } from "react-redux";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Talents } from "./Talents";
import { Jobs } from "./Jobs";
import TopBar from "./components/common/TopBar";

function SearchBar(props) {
  return <input {...props}/>;
}

function App() {
  const [phrase, setPhrase] = useState("");
  let handlePhraseChange = (e) => {
    console.log(e.target.value);
    setPhrase(e.target.value);
  }
  return (
    <div className="App">
      <TopBar />
      <div className="main">
        <h1>JOB MATCH</h1>
        <SearchBar
          value={phrase} onChange={handlePhraseChange}
          autoFocus={true}
        />
        <Talents phrase={phrase}/>
        <Jobs />
      </div>

    </div>
  );
}

export default App;
