import React, { FC } from 'react';
import './block.css';
import { IStep } from '../../models/data';

interface Props {
  title: string;
  data: IStep[];
}

const StepsBlock: FC<Props> = ({ title, data }) => {
  console.log(data);

  return (
    <div className="block">
      <h4>{title}</h4>
      {data.map((step) => (
        <div key={step.type} className="block__steps">
          <div>{step.type}</div>
          <div>{step.when}</div>
        </div>
      ))}
    </div>
  );
};

export default StepsBlock;
