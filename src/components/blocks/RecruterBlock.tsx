import React, { FC } from 'react';
import { IRecruiter } from '../../providers/recruiter';
import './block.css';

interface Props {
  title: string;
  data: IRecruiter;
}

const RecruterBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="block">
      <h4>{title}</h4>
      <div className="block__row">
        <div>Recruter</div>
        <div>{data.name}</div>
      </div>
      <div className="block__row">
        <div>Kontakt</div>
        <div>{data.contact}</div>
      </div>
    </div>
  );
};

export default RecruterBlock;
