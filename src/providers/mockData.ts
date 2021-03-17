import { selector } from 'recoil';
import { companyState } from './company';
import { recruiterState } from './recruiter';
import { IRecruitment, recruitmentState } from './recruitment';

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

export const foo = selector({
  key: 'foo',
  get: ({ get }) => {
    const newRecruitmens: IRecruitment[] = [];
    const recruitments = get(recruitmentState);
    const companies = get(companyState);
    const recruters = get(recruiterState);
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
