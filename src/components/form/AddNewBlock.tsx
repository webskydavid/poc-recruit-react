import { Formik, Form, Field, FieldArray } from 'formik';
import { FC } from 'react';
import { useHistory } from 'react-router';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import {
  IRecruter,
  ICompany,
  ISalary,
  IBenefit,
  IRecruitment
} from '../../providers/data';
import {
  benefitState,
  companyState,
  LocalStorageProvider,
  recruitmentState,
  recruterState,
  salaryState,
  stepState,
  techStackState
} from '../../providers/mockData';
import './form.css';

interface Values {
  recruter: IRecruter;
  company: ICompany;
  tech_stack: string[];
  salary: ISalary[];
  benefits: IBenefit[];
}

const AddNewBlock: FC = () => {
  const history = useHistory();
  const setRecrutiment = useSetRecoilState(recruitmentState);
  const setCompany = useSetRecoilState(companyState);
  const setRecruter = useSetRecoilState(recruterState);
  const setBenefit = useSetRecoilState(benefitState);
  const setTechStack = useSetRecoilState(techStackState);
  const setSalary = useSetRecoilState(salaryState);
  const setStep = useSetRecoilState(stepState);

  const addValues = (data: any, func: any): string => {
    const id = Date.now().toString();
    func((obj: any) => {
      return {
        _ids: [...obj._ids, id],
        _values: {
          ...obj._values,
          [id]: typeof data === 'object' ? { ...data, id } : data
        }
      };
    });
    return id;
  };

  const addArrayOfValues = (data: any, func: any): string[] => {
    return data.map((val: any) => {
      const id = Date.now().toString();
      func((obj: any) => {
        return {
          _ids: [...obj._ids, id],
          _values: {
            ...obj._values,
            [id]: typeof data === 'object' ? { ...val, id } : val
          }
        };
      });
      return id;
    });
  };

  const handleSubmit = (values: any) => {
    console.log('Log: [values]', values);

    const newRec: IRecruitment = {
      ...values,
      id: Date.now(),
      recruter: addValues(values.recruter, setRecruter),
      company: addValues(values.company, setCompany),
      benefits: addArrayOfValues(values.benefits, setBenefit),
      tech_stack: addArrayOfValues(values.tech_stack, setTechStack),
      salary: addArrayOfValues(values.salary, setSalary),
      steps: addArrayOfValues(values.salary, setStep)
    };

    console.log(newRec);

    // setRecrutiment((rec) => {
    //   const data = [...rec, { ...values, id: Date.now() }];
    //   LocalStorageProvider.write('recruitmentList', data);
    //   return data;
    // });
    //history.push('/');
  };

  return (
    <div className="form">
      <Formik
        initialValues={{
          recruter: {
            name: '',
            contact: '',
            company: ''
          },
          steps: [],
          company: {
            name: '',
            contact: '',
            offer_link: '',
            website: ''
          },
          tech_stack: [],
          salary: [],
          benefits: []
        }}
        onSubmit={handleSubmit}
      >
        {({ values, ...rest }) => {
          return (
            <Form>
              <h3 className="form__header">Rekruter</h3>
              <div className="form__set">
                <div className="form__field">
                  <label htmlFor="name">Imię i nazwisko</label>
                  <Field name="recruter.name" />
                </div>
                <div className="form__field">
                  <label htmlFor="name">Kontakt</label>
                  <Field name="recruter.contact" />
                </div>
                <div className="form__field">
                  <label htmlFor="recruter.company">Firma</label>
                  <Field name="recruter.company" />
                </div>
              </div>

              <h3 className="form__header">Firma</h3>
              <div className="form__set">
                <div className="form__field">
                  <label htmlFor="name">Firma</label>
                  <Field name="company.name" />
                </div>
                <div className="form__field">
                  <label htmlFor="name">Kontakt</label>
                  <Field name="company.contact" />
                </div>
                <div className="form__field">
                  <label htmlFor="name">Strona firmy</label>
                  <Field name="company.website" />
                </div>
                <div className="form__field">
                  <label htmlFor="name">Link to oferty</label>
                  <Field name="offer_link" />
                </div>
              </div>

              <FieldArray name="steps">
                {({ push, remove }) => {
                  const fields = values.steps.map((step, index) => (
                    <div className="form__set">
                      <div className="form__field">
                        <label htmlFor="name">Typ</label>
                        <Field name={`steps.${index}.type`} />
                      </div>
                      <div className="form__field">
                        <label htmlFor="name">Kiedy</label>
                        <Field name={`steps.${index}.when`} />
                      </div>
                      <div className="form__field">
                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                    </div>
                  ));

                  return (
                    <>
                      <h3 className="form__header">
                        Kroki{' '}
                        <button
                          type="button"
                          onClick={() => push({ type: '', when: '' })}
                        >
                          Dodaj{' '}
                        </button>
                      </h3>
                      {fields}
                    </>
                  );
                }}
              </FieldArray>

              <FieldArray name="tech_stack">
                {({ push, remove }) => {
                  return (
                    <>
                      <h3 className="form__header">
                        Stack technologiczny{' '}
                        <button
                          type="button"
                          onClick={() => push({ name: '' })}
                        >
                          Dodaj
                        </button>
                      </h3>
                      <div className="form__set">
                        {values.tech_stack.map((tech, index) => (
                          <>
                            <div className="form__field">
                              <label htmlFor="name">Stack</label>
                              <Field name={`tech_stack.${index}.name`} />
                            </div>
                            <div className="form__field">
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  );
                }}
              </FieldArray>

              <FieldArray name="salary">
                {({ push, remove }) => {
                  return (
                    <>
                      <h3 className="form__header">
                        Widełki płacowe{' '}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              contractType: 'B2B',
                              from: 0,
                              to: 0,
                              type: 'NET'
                            })
                          }
                        >
                          Dodaj
                        </button>
                      </h3>
                      <div className="form__set">
                        {values.salary.map((salary, index) => (
                          <>
                            <div className="form__field">
                              <label htmlFor="contractType">
                                Forma zatrudnienia
                              </label>
                              <Field
                                as="select"
                                name={`salary.${index}.contractType`}
                              >
                                <option value="B2B">B2B</option>
                                <option value="COE">UoP</option>
                              </Field>
                            </div>
                            <div className="form__field">
                              <label htmlFor="name">Od</label>
                              <Field name={`salary.${index}.from`} />
                            </div>
                            <div className="form__field">
                              <label htmlFor="name">Do</label>
                              <Field name={`salary.${index}.to`} />
                            </div>
                            <div className="form__field">
                              <label htmlFor={`salary.${index}.type`}>
                                Typ
                              </label>
                              <Field as="select" name={`salary.${index}.type`}>
                                <option value="NET">Netto</option>
                                <option value="GROSS">Brutto</option>
                              </Field>
                            </div>
                            <div className="form__field">
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  );
                }}
              </FieldArray>

              <FieldArray name="benefits">
                {({ push, remove }) => {
                  return (
                    <>
                      <h3 className="form__header">
                        Benefity{' '}
                        <button
                          type="button"
                          onClick={() => push({ name: '' })}
                        >
                          Dodaj
                        </button>
                      </h3>
                      <div className="form__set">
                        {values.benefits.map((benefit, index) => (
                          <>
                            <div className="form__field">
                              <label htmlFor="name">Nazwa</label>
                              <Field name={`benefits.${index}.name`} />
                            </div>
                            <div className="form__field">
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  );
                }}
              </FieldArray>
              <div className="form__set">
                <button type="submit">Submit</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddNewBlock;
