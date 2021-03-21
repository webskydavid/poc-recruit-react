import React, { FC } from 'react';
import { IBenefit } from '../../providers/benefit';
import './block.css';

interface Props {
  title: string;
  data: IBenefit[];
}

const BenefitsBlock: FC<Props> = ({ title, data }) => {
  return (
    <>
      <h5>{title}</h5>
      <div className="cell-salary__content">
        {data.map((benefit) => (
          <div key={benefit.id}>{benefit.name}</div>
        ))}
      </div>
    </>
  );
};

export default BenefitsBlock;
