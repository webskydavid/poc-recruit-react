import { FC } from 'react';

import RecruterBlock from './RecruterBlock';
import CompanyBlock from './CompanyBlock';
import TechStackBlock from './TechStackBlock';
import { Link } from 'react-router-dom';
import {
  useRecoilStateLoadable,
  useRecoilValueLoadable,
  useSetRecoilState
} from 'recoil';
import { LocalStorageProvider, recruitmentList } from './../models/mockData';

const BlockList: FC = () => {
  const [list, setRecrutiment] = useRecoilStateLoadable(recruitmentList);

  const handleRemove = (id: string) => {
    console.log(id);
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
