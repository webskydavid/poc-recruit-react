import React, { FC } from 'react';
import { IRecruiter } from '../../providers/recruiter';

interface Props {
  title: string;
  data: IRecruiter;
}

const RecruterBlock: FC<Props> = ({ title, data }) => {
  return (
    <>
      <h5>{title}</h5>
      <div>{data.name || ''}</div>
      <div>{data.company}</div>
      <div>{data.contact || ''}</div>
    </>
  );
};

export default RecruterBlock;
