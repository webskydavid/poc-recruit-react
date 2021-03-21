import React, { FC } from 'react';
import { ITechStack } from '../../providers/techStackState';
import './block.css';

interface Props {
  title: string;
  data: ITechStack[];
}

const TechStackBlock: FC<Props> = ({ title, data }) => {
  return (
    <>
      <h5>{title}</h5>
      <div className="cell-salary__content">
        {data.map((tech) => (
          <div key={tech.id}>{tech.name}</div>
        ))}
      </div>
    </>
  );
};

export default TechStackBlock;
