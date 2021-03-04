import React, { FC } from 'react';
import './RecruterBlock.css';
import { IRecruter } from '../models/data';

interface Props {
  title: string;
  data: IRecruter;
}

const RecruterBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="recruterBlock">
      <h4>{title}</h4>
      <div className="recruterBlock__row">
        <div>Recruter</div>
        <div>{data.name}</div>
      </div>
      <div className="recruterBlock__row">
        <div>Kontakt</div>
        <div>{data.contact}</div>
      </div>
      <div className="recruterBlock__row">
        <div>Kroki</div>
        {data.steps.map((step) => (
          <div key={step.type} className="recruterBlock__steps">
            <div>{step.type}</div>
            <div>{step.when}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruterBlock;
