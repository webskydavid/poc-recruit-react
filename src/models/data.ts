export interface IRecruter {
  name: string;
  contact: string;
  company: string;
  color: string;
}

export interface IStep {
  type: string;
  when: string;
}

export interface ICompany {
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
      name: 'Foo',
      contact: 'foo@gmail.com',
      company: 'figofago',
      color: '#543938'
    },
    steps: [
      // RECRUTER_TALK, HR_TALK, TECH_TALK, MANAGER_TALK, TASK
      { type: 'FIRST_TALK', when: '20.03.2021 14:00' },
      { type: 'TECH_TALK', when: '20.03.2021 14:00' },
      { type: 'FINAL_TALK', when: '20.03.2021 14:00' }
    ],
    company: {
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
    benefits: [{ name: 'Car' }, { name: 'INSURANCE' }],
    hardware: ['MAC', 'WINDOWS', 'LINUX']
  }
];

export const mockData: IRecruitment[] = data;
