import React, { FC } from "react";
import "./RecruterBlock.css";

interface Props {
  title: string;
  data: string[];
}

const TechStackBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="recruterBlock">
      <h4>
        {title} <button>Edit</button>
      </h4>
      {data.map((tech) => (
        <button>{tech}</button>
      ))}
    </div>
  );
};

export default TechStackBlock;
