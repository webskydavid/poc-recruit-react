import { atom, selector } from 'recoil';
import { emptyObject, LocalStorageProvider } from './mockData';

export interface IRawSalary {
  _ids: string[];
  _values: {
    [key: string]: ISalary;
  };
}

export interface ISalary {
  id: string;
  contractType: string;
  from: Number;
  to: Number;
  type: string;
  currency: string;
  options?: {
    holidays: boolean;
    sickness: boolean;
  };
}

export const SALARY_KEY = 'salaryList';

export const salaryState = atom<IRawSalary>({
  key: SALARY_KEY,
  default: selector({
    key: `${SALARY_KEY}/default`,
    get: () => {
      if (!LocalStorageProvider.hasValues(SALARY_KEY)) {
        LocalStorageProvider.write(SALARY_KEY, emptyObject);
      }
      return LocalStorageProvider.read(SALARY_KEY);
    }
  })
});
