import { Formik, Form, Field, FieldArray } from 'formik';
import { FC } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { IRecruter, ICompany, ISalary, IBenefit } from '../../models/data';
import { LocalStorageProvider, recruitmentList } from '../../models/mockData';
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
  const setRecrutiment = useSetRecoilState(recruitmentList);

  const handleSubmit = (values: any) => {
    console.log('Log: [values]', values);
    setRecrutiment((rec) => {
      const data = [...rec, { ...values, id: Date.now() }];
      LocalStorageProvider.write('recruitmentList', data);
      return data;
    });
    history.push('/');
  };

  return (
    <div className="form">
      <Formik
        initialValues={{
          recruter: {
            name: '',
            contact: '',
            steps: []
          },
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
              </div>

              <FieldArray name="recruter.steps">
                {({ push, remove }) => {
                  const fields = values.recruter.steps.map((step, index) => (
                    <div className="form__set">
                      <div className="form__field">
                        <label htmlFor="name">Typ</label>
                        <Field name={`recruter.steps.${index}.type`} />
                      </div>
                      <div className="form__field">
                        <label htmlFor="name">Kiedy</label>
                        <Field name={`recruter.steps.${index}.when`} />
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
                  <label htmlFor="name">Link to oferty</label>
                  <Field name="company.offer_link" />
                </div>
                <div className="form__field">
                  <label htmlFor="name">Strona firmy</label>
                  <Field name="company.website" />
                </div>
              </div>

              <FieldArray name="tech_stack">
                {({ push, remove }) => {
                  return (
                    <>
                      <h3 className="form__header">
                        Stack technologiczny{' '}
                        <button type="button" onClick={() => push('')}>
                          Dodaj
                        </button>
                      </h3>
                      <div className="form__set">
                        {values.tech_stack.map((tech, index) => (
                          <>
                            <div className="form__field">
                              <label htmlFor="name">Stack</label>
                              <Field name={`tech_stack.${index}`} />
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
                              type: ''
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
                              <label htmlFor="name">Typ</label>
                              <Field name={`salary.${index}.type`} />
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
