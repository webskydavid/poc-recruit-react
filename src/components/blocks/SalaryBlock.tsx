import React, { FC } from 'react';
import { ISalary } from '../../providers/salaryState';

interface Props {
  title: string;
  data: ISalary[];
}

const contracts: any = {
  B2B: 'Kontrakt',
  COE: 'Umowa o pracę'
};

const SalaryBlock: FC<Props> = ({ title, data }) => {
  return (
    <>
      <h5>Salary</h5>
      <div className="cell-salary__content">
        {data.map((salary, index) => (
          <div key={index} className="salary">
            <h4>{contracts[salary.contractType]}</h4>
            <div className="salary__values">
              {salary.from} - {salary.to}
            </div>
            <div className="salary__sufix">
              <span>{salary.type}</span>
              <span>{salary.currency}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SalaryBlock;
