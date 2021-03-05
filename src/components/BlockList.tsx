import { FC } from 'react';

import RecruterBlock from './RecruterBlock';
import CompanyBlock from './CompanyBlock';
import TechStackBlock from './TechStackBlock';
import { mockData } from '../models/data';
import { Link } from 'react-router-dom';

const BlockList: FC = () => {
  return (
    <>
      <Link to="/add_new_block">
        <button>Add new recruitment</button>
      </Link>

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
    </>
  );
};

export default BlockList;
