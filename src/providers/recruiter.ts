import { atom, selector } from 'recoil';

export interface IRawRecruiter {
  _ids: string[];
  _values: {
    [key: string]: IRecruiter;
  };
}

export interface IRecruiter {
  id: string;
  name: string;
  contact: string;
  company: string;
  color: string;
}

export const RECRUITER_KEY = 'recruterList';

export const recruiterState = atom<IRawRecruiter>({
  key: RECRUITER_KEY,
  default: selector({
    key: `${RECRUITER_KEY}/default`,
    get: () => {
      return {
        _ids: ['1234', '2345'],
        _values: {
          '1234': {
            id: '1234',
            name: 'Foo',
            contact: 'foo@gmail.com',
            company: 'figofago',
            color: '#543938'
          },
          '2345': {
            id: '2345',
            name: 'Foo1',
            contact: 'foo1@gmail.com',
            company: 'figofago1',
            color: '#543938'
          }
        }
      };
    }
  })
});
