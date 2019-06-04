import React from "react";

const talents = ["John", "Jerry", "Merry"];
export function Talents(props) {
  const { phrase } = props;
  const results = talents
    .filter(talent => phrase ? talent.match(new RegExp(phrase, 'i')) : true)
    .map((talent, key) => (<li key={key}>{talent}</li>));
  if (!results.length) return null;
  return (<div>
    <h2>Talents</h2>
    <React.Fragment>
      {results}
    </React.Fragment>
  </div>);
}
