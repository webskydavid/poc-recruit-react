import { atom, selector } from 'recoil';

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
      return {
        _ids: ['1234', '2345'],
        _values: {
          '1234': { id: '1234', name: 'Node' },
          '2345': { id: '2345', name: 'JavaScript' }
        }
      };
    }
  })
});
