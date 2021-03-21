import { atom, selector } from 'recoil';
import { emptyObject, LocalStorageProvider } from './mockData';

export interface IRawStep {
  _ids: string[];
  _values: {
    [key: string]: IStep;
  };
}

export interface IStep {
  id: string;
  type: string;
  when: string;
}

export const STEP_KEY = 'stepList';

export const stepState = atom<IRawStep>({
  key: STEP_KEY,
  default: selector({
    key: `${STEP_KEY}/default`,
    get: () => {
      if (!LocalStorageProvider.hasValues(STEP_KEY)) {
        LocalStorageProvider.write(STEP_KEY, emptyObject);
      }
      return LocalStorageProvider.read(STEP_KEY);
    }
  })
});
