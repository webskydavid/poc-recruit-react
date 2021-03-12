import { FC } from 'react';

import RecruterBlock from './blocks/RecruterBlock';
import CompanyBlock from './blocks/CompanyBlock';
import TechStackBlock from './blocks/TechStackBlock';
import { Link } from 'react-router-dom';
import { useRecoilStateLoadable } from 'recoil';
import { LocalStorageProvider, recruitmentList } from './../models/mockData';
import BenefitsBlock from './blocks/BenefitsBlock';

const BlockList: FC = () => {
  const [list, setRecrutiment] = useRecoilStateLoadable(recruitmentList);

  const handleRemove = (id: string) => {
    setRecrutiment((rec) => {
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
          {list.contents
            ? list.contents.map((recruitment) => {
                return (
                  <div className="app__blocks" key={recruitment.id}>
                    <button onClick={() => handleRemove(recruitment.id)}>
                      Usuń
                    </button>
                    <RecruterBlock
                      title="Kto rekrutuje"
                      data={recruitment.recruter}
                    />
                    <CompanyBlock title="Firma" data={recruitment.company} />
                    <TechStackBlock
                      title="Stack technologiczny"
                      data={recruitment.tech_stack}
                    />
                    <BenefitsBlock
                      title={'Benefity'}
                      data={recruitment.benefits}
                    />
                  </div>
                );
              })
            : null}
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      return <div>{list.contents.toString()}</div>;
  }
};

export default BlockList;
