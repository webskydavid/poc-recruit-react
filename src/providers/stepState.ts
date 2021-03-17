import { atom, selector } from 'recoil';

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
      return {
        _ids: ['1234', '2345'],
        _values: {
          '1234': { id: '1234', type: 'FIRST_TALK', when: '20.03.2021 14:00' },
          '2345': { id: '2345', type: 'FIRST_TALK', when: '20.03.2021 14:00' }
        }
      };
    }
  })
});
