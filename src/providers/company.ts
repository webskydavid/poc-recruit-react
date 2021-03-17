import { atom, selector } from 'recoil';

export interface IRawCompany {
  _ids: string[];
  _values: {
    [key: string]: ICompany;
  };
}

export interface ICompany {
  id: string;
  name: string;
  contact: string;
  website: string;
}

export const COMPANY_KEY = 'companyList';

export const companyState = atom<IRawCompany>({
  key: COMPANY_KEY,
  default: selector({
    key: `${COMPANY_KEY}/default`,
    get: () => {
      return {
        _ids: ['1234'],
        _values: {
          '1234': {
            id: '1234',
            name: 'Foo inc.',
            contact: 'fooinc@oo.com',
            website: 'www.fooinc.com'
          }
        }
      };
    }
  })
});
