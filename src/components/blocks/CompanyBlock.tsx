import React, { FC } from 'react';
import './block.css';
import { ICompany } from '../../models/data';

interface Props {
  title: string;
  data: ICompany;
}

const CompanyBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="block">
      <h4>{title}</h4>
      <div className="block__row">
        <div>Firma</div>
        <div>{data.name}</div>
      </div>
      <div className="block__row">
        <div>Kontakt</div>
        <div>{data.contact}</div>
      </div>
      <div className="block__row">
        <div>Link do strony</div>
        <div>{data.website}</div>
      </div>
    </div>
  );
};

export default CompanyBlock;
