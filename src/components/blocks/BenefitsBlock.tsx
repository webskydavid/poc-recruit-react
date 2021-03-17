import React, { FC } from 'react';
import { IBenefit } from '../../providers/benefit';
import './block.css';

interface Props {
  title: string;
  data: IBenefit[];
}

const BenefitsBlock: FC<Props> = ({ title, data }) => {
  return (
    <div>
      <h4>{title}</h4>
      {data.map((benefit, i) => (
        <button key={i}>{benefit.name}</button>
      ))}
    </div>
  );
};

export default BenefitsBlock;
