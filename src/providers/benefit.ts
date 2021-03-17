import { atom, selector } from 'recoil';

export interface IRawBenefit {
  _ids: string[];
  _values: {
    [key: string]: IBenefit;
  };
}

export interface IBenefit {
  id: string;
  name: string;
}

export const BENEFIT_KEY = 'benefitList';

export const benefitState = atom<IRawBenefit>({
  key: BENEFIT_KEY,
  default: selector({
    key: `${BENEFIT_KEY}/default`,
    get: () => {
      return {
        _ids: ['1234', '2345'],
        _values: {
          '1234': { id: '1234', name: 'hajs' },
          '2345': { id: '2345', name: 'auto' }
        }
      };
    }
  })
});
