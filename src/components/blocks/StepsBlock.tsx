import React, { FC } from 'react';
import { IStep } from '../../providers/stepState';

interface Props {
  title: string;
  data: IStep[];
}

const StepsBlock: FC<Props> = ({ title, data }) => {
  console.log(data);

  return (
    <>
      <h5>{title}</h5>
      <div className="cell-steps__content">
        {data.map((step) => (
          <div className="step" key={step.type}>
            <h4>{step.type}</h4>
            <div>{step.when}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StepsBlock;
