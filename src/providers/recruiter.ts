import { atom, selector } from 'recoil';
import { emptyObject, LocalStorageProvider } from './mockData';

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
      if (!LocalStorageProvider.hasValues(RECRUITER_KEY)) {
        LocalStorageProvider.write(RECRUITER_KEY, emptyObject);
      }
      return LocalStorageProvider.read(RECRUITER_KEY);
    }
  })
});
