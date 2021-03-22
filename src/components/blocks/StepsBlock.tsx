import React, { FC } from 'react';
import { IStep } from '../../providers/stepState';
import './block.css';

interface Props {
  title: string;
  data: IStep[];
}

const StepsBlock: FC<Props> = ({ title, data }) => {
  console.log(data);

  return (
    <>
      <h5>{title}</h5>
      <div className="cell-salary__content">
        {data.map((step) => (
          <div key={step.type}>
            <div>{step.type}</div>
            <div>{step.when}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StepsBlock;
