import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import RecruterBlock from './blocks/RecruterBlock';
import CompanyBlock from './blocks/CompanyBlock';
import TechStackBlock from './blocks/TechStackBlock';
import BenefitsBlock from './blocks/BenefitsBlock';
import SalaryBlock from './blocks/SalaryBlock';
import StepsBlock from './blocks/StepsBlock';

import { getRecrutiments, LocalStorageProvider } from '../providers/mockData';
import { recruitmentState } from '../providers/recruitment';
import './blockList.css';

const BlockList: FC = () => {
  const removeRecruitment = useSetRecoilState(recruitmentState);
  const list = useRecoilValueLoadable(getRecrutiments);

  const handleRemove = (id: string) => {
    removeRecruitment((rec) => {
      const data = [...rec.filter((rec) => rec.id !== id)];
      LocalStorageProvider.write('recruitmentList', data);
      return data;
    });
  };

  switch (list.state) {
    case 'hasValue':
      return (
        <>
          <Link to="/add_new_block">
            <button>Dodaj rekrutację</button>
          </Link>

          <h1>Rekrutacje</h1>
          <div className="list">
            {list.contents.length
              ? list.contents.map((recruitment) => {
                  console.log(recruitment);

                  return (
                    <div className="list__block" key={recruitment.id}>
                      <div className="cell-recruiter">
                        <RecruterBlock
                          title="Kto rekrutuje"
                          data={recruitment.recruiter}
                        />
                      </div>
                      <div className="cell-company">
                        <CompanyBlock
                          title="Firma"
                          data={recruitment.company}
                        />
                      </div>
                      <div className="cell-salary">
                        <SalaryBlock title="Płaca" data={recruitment.salary} />
                      </div>
                      <div className="cell-status">
                        <h5>Status</h5>
                      </div>
                      <div className="cell-tech">
                        <TechStackBlock
                          title="Stack technologiczny"
                          data={recruitment.tech_stack}
                        />
                      </div>
                      <div className="cell-level">
                        <h5>Level</h5>
                      </div>
                      <div className="cell-benefits">
                        <BenefitsBlock
                          title={'Benefity'}
                          data={recruitment.benefits}
                        />
                      </div>
                      <div className="cell-description"></div>
                      <div className="cell-process">
                        <StepsBlock
                          title="Kroki rekrutacji"
                          data={recruitment.steps}
                        />
                      </div>
                      <div className="cell-expect">expect</div>

                      {/* <button onClick={() => handleRemove(recruitment.id)}>
                      Usuń
                    </button>
                    <div className="block__row">
                      <div>Link do oferty</div>
                      <div>{recruitment.offer_link}</div>
                    </div>
                    <RecruterBlock
                      title="Kto rekrutuje"
                      data={recruitment.recruiter}
                    />
                    <CompanyBlock title="Firma" data={recruitment.company} />
                    <StepsBlock
                      title="Kroki rekrutacji"
                      data={recruitment.steps}
                    />
                    <SalaryBlock title="Płaca" data={recruitment.salary} />
                    <TechStackBlock
                      title="Stack technologiczny"
                      data={recruitment.tech_stack}
                    />
                    <BenefitsBlock
                      title={'Benefity'}
                      data={recruitment.benefits}
                    /> */}
                    </div>
                  );
                })
              : 'Brak rekrutacji!'}
          </div>
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      return <div>{list.contents.toString()}</div>;
  }
};

export default BlockList;
