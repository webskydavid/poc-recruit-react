import { atom, selector } from 'recoil';
import { emptyObject, LocalStorageProvider } from './mockData';

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
      if (!LocalStorageProvider.hasValues(COMPANY_KEY)) {
        LocalStorageProvider.write(COMPANY_KEY, emptyObject);
      }
      return LocalStorageProvider.read(COMPANY_KEY);
    }
  })
});
