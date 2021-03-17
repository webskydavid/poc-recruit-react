import React, { FC } from 'react';
import './block.css';
import { IRecruter } from '../../providers/data';

interface Props {
  title: string;
  data: IRecruter;
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
