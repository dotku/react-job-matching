import { createStore} from "redux";
import { Provider } from "react-redux";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Talents } from "./components/Talents";
import { Jobs } from "./components/Jobs";
import Footer from "./components/common/Footer";
import { AgentCompanies } from "./components/AgentCompanies";
import { JobBoards } from "./components/JobBoards";

function SearchBar(props) {
  return <input
    value={props.phrase}
    onChange={props.onChange}
  />;
}

function App() {
  console.log('process.env', process.env);
  const [phrase, setPhrase] = useState("");
  let handlePhraseChange = (e) => {
    console.log(e.target.value);
    setPhrase(e.target.value);
  }
  return (
    <div className="App">
      <div className="top"></div>
      <div className="mainContainer" style={{minHeight: "calc(100vh - 238px)"}}>
        <h1>JOB MATCHING</h1>
        <SearchBar value={phrase} onChange={handlePhraseChange}/>
        <Talents phrase={phrase}/>
        <Jobs phrase={phrase} />
        <JobBoards phrase={phrase} />
        <AgentCompanies phrase={phrase} />
      </div>
      <div className="footer" style={{}}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
