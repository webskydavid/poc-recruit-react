import React, { FC } from 'react';
import { ITechStack } from '../../providers/techStackState';
import './block.css';

interface Props {
  title: string;
  data: ITechStack[];
}

const TechStackBlock: FC<Props> = ({ title, data }) => {
  return (
    <div>
      <h4>{title}</h4>
      {data.map((tech) => (
        <button key={tech.id}>{tech.name}</button>
      ))}
    </div>
  );
};

export default TechStackBlock;
