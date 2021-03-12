import { atom, selector } from 'recoil';
import { ICompany, IRecruitment, mockData } from './data';

export class LocalStorageProvider {
  static read = (key: string) => {
    if (localStorage.getItem(key) === null) {
      LocalStorageProvider.write(key, '');
    }

    return JSON.parse(localStorage.getItem(key) || '[]');
  };

  static write = (key: string, values: any) => {
    localStorage.setItem(key, JSON.stringify(values));
  };

  static remove = (key: string) => {
    localStorage.removeItem(key);
  };

  static clear = (key: string) => {
    localStorage.clear();
  };
}

export const RECRUITMENT_KEY = 'recruitmentList';
export const COMPANY_KEY = 'recruitmentList';

export const recruitments = atom<IRecruitment[]>({
  key: RECRUITMENT_KEY,
  default: selector({
    key: `${RECRUITMENT_KEY}/default`,
    get: () => {
      return LocalStorageProvider.read(RECRUITMENT_KEY);
    }
  })
});

export const companies = atom<ICompany[]>({
  key: COMPANY_KEY,
  default: selector({
    key: `${COMPANY_KEY}/default`,
    get: () => {
      return LocalStorageProvider.read(COMPANY_KEY);
    }
  })
});
