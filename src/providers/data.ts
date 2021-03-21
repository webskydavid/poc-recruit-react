import { IRecruitment } from './recruitment';

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
    recruiter: {
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
    tech_stack: [
      { id: '1', name: 'REACT' },
      { id: '1', name: 'JAVASCRIPT' },
      { id: '1', name: 'NODE' }
    ],
    salary: [
      {
        id: '1',
        contractType: 'B2B', // B2B, COE, FREELANCER, OTHER
        from: 15000,
        to: 18000,
        currency: 'PLN',
        type: 'GROSS', // GROSS, NET
        options: { holidays: true, sickness: true }
      },
      {
        id: '2',
        contractType: 'COE',
        from: 17000,
        to: 22000,
        currency: 'USD',
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

export const mockData: IRecruitment[] = data;
