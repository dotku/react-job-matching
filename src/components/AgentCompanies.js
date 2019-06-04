import React from "react";
const agentCompanies = [
  "TEKSystems",
  "modis",
  "xoriant",
  "Collabera",
  "Infinity Consulting Solutions",
  "US Tech Solutions",
];

export function AgentCompanies(props) {
  const { phrase } = props;
  const results = agentCompanies
    .filter(company => phrase ? company.match(new RegExp(phrase, 'i')) : true)
    .map((company, key) => (<li key={key}>{company}</li>));
  if (!results.length) return null;
  return <div>
    <h2>Agent Companies</h2>
    <React.Fragment>
      {results}
    </React.Fragment>
  </div>;
}
