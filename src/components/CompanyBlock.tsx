import React, { FC } from "react";
import "./RecruterBlock.css";
import { ICompany } from "../models/data";

interface Props {
  title: string;
  data: ICompany;
}

const CompanyBlock: FC<Props> = ({ title, data }) => {
  return (
    <div className="recruterBlock">
      <h4>
        {title} <button>Edit</button>
      </h4>
      <div className="recruterBlock__row">
        <div>Firma</div>
        <div>{data.name}</div>
      </div>
      <div className="recruterBlock__row">
        <div>Kontakt</div>
        <div>{data.contact}</div>
      </div>
      <div className="recruterBlock__row">
        <div>Link do oferty</div>
        <div>{data.offer_link}</div>
      </div>
      <div className="recruterBlock__row">
        <div>Link do strony</div>
        <div>{data.website}</div>
      </div>
    </div>
  );
};

export default CompanyBlock;
