import React from 'react';
import './styles.css';
import RecruterBlock from './components/RecruterBlock';
import CompanyBlock from './components/CompanyBlock';
import TechStackBlock from './components/TechStackBlock';
import { mockData } from './models/data';

export default function App() {
  return (
    <div className="app">
      <h1>Rekrutacje</h1>
      {mockData.map((recruitment) => {
        return (
          <div className="app__blocks" key={recruitment.id}>
            <RecruterBlock title="Kto rekrutuje" data={recruitment.recruter} />
            <CompanyBlock title="Firma" data={recruitment.company} />
            <TechStackBlock
              title="Stack technologiczny"
              data={recruitment.tech_stack}
            />
          </div>
        );
      })}
    </div>
  );
}
