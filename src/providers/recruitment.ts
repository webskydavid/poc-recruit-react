import { atom, selector } from 'recoil';
import { IBenefit } from './benefit';
import { ICompany } from './company';
import { IRecruiter } from './recruiter';
import { ISalary } from './salaryState';
import { IStep } from './stepState';

export const RECRUITMENT_KEY = 'recruitmentList';

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
  recruiter: string;
  steps: string[];
  company: string;
  tech_stack: string[];
  salary: string[];
  benefits: string[];
  hardware: string[];
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
  recruiter: IRecruiter;
  steps: IStep[];
  company: ICompany;
  tech_stack: string[];
  salary: ISalary[];
  benefits: IBenefit[];
  hardware: string[];
}

export const recruitmentState = atom<IRawRecruitment[]>({
  key: RECRUITMENT_KEY,
  default: selector({
    key: `${RECRUITMENT_KEY}/default`,
    get: () => {
      return [];
    }
  })
});
