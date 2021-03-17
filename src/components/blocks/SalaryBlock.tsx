import React, { FC } from 'react';
import { ISalary } from '../../providers/data';
import './block.css';

interface Props {
  title: string;
  data: ISalary[];
}

const SalaryBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="block">
      <h4>{title}</h4>
      {data.map((salary, index) => (
        <div key={index} className="block__row">
          {salary.contractType} {salary.from} {salary.to} {salary.type}
        </div>
      ))}
    </div>
  );
};

export default SalaryBlock;
