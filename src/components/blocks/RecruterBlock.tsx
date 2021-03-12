import React, { FC } from 'react';
import './block.css';
import { IRecruter } from '../../models/data';

interface Props {
  title: string;
  data: IRecruter;
}

const RecruterBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="block">
      <h4>{title}</h4>
      <div className="block__row">
        <div>Recruter</div>
        <div>{data.name}</div>
      </div>
      <div className="block__row">
        <div>Kontakt</div>
        <div>{data.contact}</div>
      </div>
      <div className="block__row">
        <div>Kroki</div>
        {data.steps.map((step) => (
          <div key={step.type} className="block__steps">
            <div>{step.type}</div>
            <div>{step.when}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruterBlock;