import { atom, selector } from 'recoil';
import {
  IBenefit,
  ICompany,
  IRecruitment,
  IRecruter,
  ISalary,
  IStep,
  ITechStack,
  mockData
} from './data';

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

export interface IRawRecruitment {
  id: string;
  summary: {
    status: string;
    note: string;
  };
  createDate: string;
  updateDate: string;
  level: string[];
  offer_link: string;
  note: string;
  recruter: string;
  steps: string[];
  company: string;
  tech_stack: string[];
  salary: string[];
  benefits: string[];
  hardware: string[];
}

export interface IRawCompany {
  _ids: string[];
  _values: {
    [key: string]: ICompany;
  };
}

export interface IRawRecruter {
  _ids: string[];
  _values: {
    [key: string]: IRecruter;
  };
}

export interface IRawTechStack {
  _ids: string[];
  _values: {
    [key: string]: ITechStack;
  };
}

export interface IRawBenefit {
  _ids: string[];
  _values: {
    [key: string]: IBenefit;
  };
}

export interface IRawSalary {
  _ids: string[];
  _values: {
    [key: string]: ISalary;
  };
}

export interface IRawStep {
  _ids: string[];
  _values: {
    [key: string]: IStep;
  };
}

export const RECRUITMENT_KEY = 'recruitmentList';
export const COMPANY_KEY = 'companyList';
export const RECRUTER_KEY = 'recruterList';
export const BENEFIT_KEY = 'benefitList';
export const TECH_STACK_KEY = 'techStackList';
export const SALARY_KEY = 'salaryList';
export const STEP_KEY = 'stepList';

export const foo = selector({
  key: 'foo',
  get: ({ get }) => {
    const newRecruitmens: IRecruitment[] = [];
    const recruitments = get(recruitmentState);
    const companies = get(companyState);
    const recruters = get(recruterState);
    return [
      {
        id: '1',
        summary: {
          status: 'PENDING',
          note: 'fjweofjowejfowejfowejfowejfoe'
        },
        createDate: '2021-03-10T13:00:00',
        updateDate: '2021-03-10T13:00:00',
        level: ['JUNIOR', 'REGULAR', 'SENIOR'],
        offer_link: 'www.x.pl',
        note: 'Lorem ipsum',
        recruter: {
          id: '1',
          name: 'Foo',
          contact: 'foo@gmail.com',
          company: 'figofago',
          color: '#543938'
        },
        steps: [
          { id: '1', type: 'FIRST_TALK', when: '20.03.2021 14:00' },
          { id: '1', type: 'TECH_TALK', when: '20.03.2021 14:00' },
          { id: '1', type: 'FINAL_TALK', when: '20.03.2021 14:00' }
        ],
        company: {
          id: '1',
          name: 'Foo inc.',
          contact: 'fooinc@oo.com',
          website: 'www.fooinc.com'
        },
        tech_stack: [{ id: '1', name: 'React' }],
        salary: [
          {
            id: '1',
            contractType: 'B2B',
            from: 15000,
            to: 18000,
            type: 'GROSS',
            options: { holidays: true, sickness: true }
          },
          {
            id: '2',
            contractType: 'COE',
            from: 17000,
            to: 22000,
            type: 'NET'
          }
        ],
        benefits: [
          { id: '1', name: 'Car' },
          { id: '1', name: 'INSURANCE' }
        ],
        hardware: ['MAC', 'WINDOWS', 'LINUX']
      }
    ];
  }
});

export const recruitmentState = atom<IRawRecruitment[]>({
  key: RECRUITMENT_KEY,
  default: selector({
    key: `${RECRUITMENT_KEY}/default`,
    get: () => {
      return [];
    }
  })
});

export const companyState = atom<IRawCompany>({
  key: COMPANY_KEY,
  default: selector({
    key: `${COMPANY_KEY}/default`,
    get: () => {
      return {
        _ids: ['1234'],
        _values: {
          '1234': {
            id: '1234',
            name: 'Foo inc.',
            contact: 'fooinc@oo.com',
            website: 'www.fooinc.com'
          }
        }
      };
    }
  })
});

export const recruterState = atom<IRawRecruter>({
  key: RECRUTER_KEY,
  default: selector({
    key: `${RECRUTER_KEY}/default`,
    get: () => {
      return {
        _ids: ['1234', '2345'],
        _values: {
          '1234': {
            id: '1234',
            name: 'Foo',
            contact: 'foo@gmail.com',
            company: 'figofago',
            color: '#543938'
          },
          '2345': {
            id: '2345',
            name: 'Foo1',
            contact: 'foo1@gmail.com',
            company: 'figofago1',
            color: '#543938'
          }
        }
      };
    }
  })
});

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
            contractType: 'B2B', // B2B, COE, FREELANCER, OTHER
            from: 15000,
            to: 18000,
            type: 'GROSS', // GROSS, NET
            options: { holidays: true, sickness: true }
          },
          '2345': {
            id: '1',
            contractType: 'B2B', // B2B, COE, FREELANCER, OTHER
            from: 15000,
            to: 18000,
            type: 'GROSS', // GROSS, NET
            options: { holidays: true, sickness: true }
          }
        }
      };
    }
  })
});

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
