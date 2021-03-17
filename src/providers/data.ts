export interface IRecruter {
  id: string;
  name: string;
  contact: string;
  company: string;
  color: string;
}

export interface IStep {
  id: string;
  type: string;
  when: string;
}

export interface ICompany {
  id: string;
  name: string;
  contact: string;
  website: string;
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

export interface IBenefit {
  id: string;
  name: string;
}

export interface ITechStack {
  id: string;
  name: string;
}

export interface IRecruitment {
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
  recruter: IRecruter;
  steps: IStep[];
  company: ICompany;
  tech_stack: string[];
  salary: ISalary[];
  benefits: IBenefit[];
  hardware: string[];
}

const data: IRecruitment[] = [
  {
    id: '1',
    summary: {
      status: 'PENDING', // PENDING, FINISH_RECRUITMENT, FEEDBACK, REJECTED, CANCELED, ACCEPTED
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
      // RECRUTER_TALK, HR_TALK, TECH_TALK, MANAGER_TALK, TASK
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
    tech_stack: ['REACT', 'JAVASCRIPT', 'NODE', 'DART', 'FLUTTER'],
    salary: [
      {
        id: '1',
        contractType: 'B2B', // B2B, COE, FREELANCER, OTHER
        from: 15000,
        to: 18000,
        type: 'GROSS', // GROSS, NET
        options: { holidays: true, sickness: true }
      },
      { id: '2', contractType: 'COE', from: 17000, to: 22000, type: 'NET' }
    ],
    benefits: [
      { id: '1', name: 'Car' },
      { id: '1', name: 'INSURANCE' }
    ],
    hardware: ['MAC', 'WINDOWS', 'LINUX']
  }
];

export const mockData: IRecruitment[] = data;
