import React from "react";
import "./styles.css";
import RecruterBlock from "./components/RecruterBlock";
import CompanyBlock from "./components/CompanyBlock";
import { mockData } from "./models/data";

export default function App() {
  return (
    <div className="App">
      <h1>Rekrutacje</h1>
      {mockData.map((recruitment) => {
        return (
          <div key={recruitment.id}>
            <RecruterBlock title="Kto rekrutuje" data={recruitment.recruter} />
            <CompanyBlock title="Firma" data={recruitment.company} />
          </div>
        );
      })}
    </div>
  );
}
