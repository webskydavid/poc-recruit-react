import { atom, selector } from 'recoil';
import { emptyObject, LocalStorageProvider } from './mockData';

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
      if (!LocalStorageProvider.hasValues(BENEFIT_KEY)) {
        LocalStorageProvider.write(BENEFIT_KEY, emptyObject);
      }
      return LocalStorageProvider.read(BENEFIT_KEY);
    }
  })
});
