import { atom, selector } from 'recoil';
import { emptyObject, LocalStorageProvider } from './mockData';

export interface IRawTechStack {
  _ids: string[];
  _values: {
    [key: string]: ITechStack;
  };
}

export interface ITechStack {
  id: string;
  name: string;
}

export const TECH_STACK_KEY = 'techStackList';

export const techStackState = atom<IRawTechStack>({
  key: TECH_STACK_KEY,
  default: selector({
    key: `${TECH_STACK_KEY}/default`,
    get: () => {
      if (!LocalStorageProvider.hasValues(TECH_STACK_KEY)) {
        LocalStorageProvider.write(TECH_STACK_KEY, emptyObject);
      }
      return LocalStorageProvider.read(TECH_STACK_KEY);
    }
  })
});
