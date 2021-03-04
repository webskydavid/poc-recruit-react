export interface IRecruter {
  name: string;
  contact: string;
  steps: IStep[];
}

export interface IStep {
  type: string;
  when: string;
}

export interface ICompany {
  name: string;
  contact: string;
  offer_link: string;
  website: string;
}

export interface ISalary {
  from: Number;
  to: Number;
  type: string;
}

export interface IBenefit {
  name: string;
}

export interface IRecruitment {
  id: string;
  recruter: IRecruter;
  company: ICompany;
  tech_stack: string[];
  salary: ISalary[];
  benefits: IBenefit[];
}

const data = [
  {
    id: "1",
    recruter: {
      name: "Foo",
      contact: "foo@gmail.com",
      steps: [
        { type: "FIRST_TALK", when: "20.03.2021 14:00" },
        { type: "TECH_TALK", when: "20.03.2021 14:00" },
        { type: "FINAL_TALK", when: "20.03.2021 14:00" }
      ]
    },
    company: {
      name: "Foo inc.",
      contact: "fooinc@oo.com",
      offer_link: "www.offer.com",
      website: "www.fooinc.com"
    },
    tech_stack: ["REACT", "JAVASCRIPT", "NODE"],
    salary: [
      { from: 15000, to: 18000, type: "GROSS" },
      { from: 17000, to: 22000, type: "NET" }
    ],
    benefits: [{ name: "Car" }, { name: "INSURANCE" }]
  },
  {
    id: "2",
    recruter: {
      name: "Foo",
      contact: "foo@gmail.com",
      steps: [
        { type: "FIRST_TALK", when: "20.03.2021 14:00" },
        { type: "TECH_TALK", when: "20.03.2021 14:00" },
        { type: "FINAL_TALK", when: "20.03.2021 14:00" }
      ]
    },
    company: {
      name: "Foo inc.",
      contact: "fooinc@oo.com",
      offer_link: "www.offer.com",
      website: "www.fooinc.com"
    },
    tech_stack: ["REACT", "JAVASCRIPT", "NODE"],
    salary: [
      { from: 15000, to: 18000, type: "GROSS" },
      { from: 17000, to: 22000, type: "NET" }
    ],
    benefits: [{ name: "Car" }, { name: "INSURANCE" }]
  }
];

export const mockData: IRecruitment[] = data;
