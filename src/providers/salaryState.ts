import { atom, selector } from 'recoil';

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
      return {
        _ids: ['1234', '2345'],
        _values: {
          '1234': {
            id: '1',
            contractType: 'B2B',
            from: 15000,
            to: 18000,
            type: 'GROSS',
            options: { holidays: true, sickness: true }
          },
          '2345': {
            id: '1',
            contractType: 'B2B',
            from: 15000,
            to: 18000,
            type: 'GROSS',
            options: { holidays: true, sickness: true }
          }
        }
      };
    }
  })
});
