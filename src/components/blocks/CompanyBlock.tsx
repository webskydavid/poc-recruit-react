import React, { FC } from 'react';
import { ICompany } from '../../providers/company';
import './block.css';

interface Props {
  title: string;
  data: ICompany;
}

const CompanyBlock: FC<Props> = ({ title, data }) => {
  return (
    <>
      <h5>{title}</h5>
      <div>{data.name}</div>
      <div>{data.website}</div>
      <div>{data.contact}</div>
    </>
  );
};

export default CompanyBlock;
