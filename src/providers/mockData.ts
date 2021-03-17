import { selector } from 'recoil';
import { benefitState } from './benefit';
import { companyState } from './company';
import { recruiterState } from './recruiter';
import { IRecruitment, recruitmentState } from './recruitment';
import { salaryState } from './salaryState';
import { stepState } from './stepState';
import { techStackState } from './techStackState';

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

export const getRecrutiments = selector({
  key: 'getRecrutiments',
  get: ({ get }) => {
    const newRecruitmens: IRecruitment[] = [];
    const recruitments = get(recruitmentState);
    const companies = get(companyState);
    const recruiters = get(recruiterState);
    const steps = get(stepState);
    const salary = get(salaryState);
    const techStack = get(techStackState);
    const benefits = get(benefitState);

    return recruitments.map((rec) => {
      return {
        ...rec,
        company: companies._values[rec.company],
        recruiter: recruiters._values[rec.recruiter],
        steps: rec.steps.map((id) => steps._values[id]),
        salary: rec.salary.map((id) => salary._values[id]),
        tech_stack: rec.tech_stack.map((id) => techStack._values[id]),
        benefits: rec.benefits.map((id) => benefits._values[id])
      };
    });
  }
});

/*
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
  recruiter: {
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
*/
