import React, { FC } from 'react';
import './RecruterBlock.css';

interface Props {
  title: string;
  data: string[];
}

const TechStackBlock: FC<Props> = ({ title, data }) => {
  return (
    <div>
      <h4>{title}</h4>
      {data.map((tech) => (
        <button key={tech}>{tech}</button>
      ))}
    </div>
  );
};

export default TechStackBlock;
