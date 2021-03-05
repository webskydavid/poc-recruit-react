import { Formik, Form, Field, FieldArray } from 'formik';
import { FC } from 'react';
import { IRecruter, ICompany, ISalary, IBenefit } from '../models/data';
import './form.css';

interface Values {
  recruter: IRecruter;
  company: ICompany;
  tech_stack: string[];
  salary: ISalary[];
  benefits: IBenefit[];
}

const AddNewBlock: FC = () => {
  const handleSubmit = (values: Values) => {
    console.log(values);
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
              <div className="form__set">
                <div className="form__field">
                  <h3>eofjeof</h3>
                </div>
                <div className="form__field">
                  <label htmlFor="name">Imię i nazwisko</label>
                  <Field name="recruter.name" />
                </div>
                <div className="form__field">
                  <label htmlFor="name">Kontakt</label>
                  <Field name="recruter.contact" />
                </div>
                <FieldArray name="recruter.steps">
                  {({ push, remove }) => {
                    const fields = values.recruter.steps.map((step, index) => (
                      <>
                        <div className="form__field">
                          <label htmlFor="name">
                            Typ{' '}
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </label>
                          <Field name={`recruter.steps.${index}.type`} />
                        </div>
                        <div className="form__field">
                          <label htmlFor="name">Kiedy</label>
                          <Field name={`recruter.steps.${index}.when`} />
                        </div>
                      </>
                    ));

                    return (
                      <>
                        <div className="form__field">
                          <button
                            type="button"
                            onClick={() => push({ type: '', when: '' })}
                          >
                            Add step
                          </button>
                        </div>
                        {fields}
                      </>
                    );
                  }}
                </FieldArray>
              </div>

              <div className="form__set">
                <div>
                  <label htmlFor="name">Firma</label>
                  <Field name="company.name" />
                </div>
                <div>
                  <label htmlFor="name">Kontakt</label>
                  <Field name="company.contact" />
                </div>
                <div>
                  <label htmlFor="name">Link to oferty</label>
                  <Field name="company.offer_link" />
                </div>
                <div>
                  <label htmlFor="name">Strona firmy</label>
                  <Field name="company.website" />
                </div>
              </div>

              <FieldArray name="tech_stack">
                {({ push, remove }) => {
                  return (
                    <div className="form__set">
                      <button type="button" onClick={() => push('')}>
                        Add tech
                      </button>
                      {values.tech_stack.map((tech, index) => (
                        <>
                          <div>
                            <label htmlFor="name">Stack</label>
                            <Field name={`tech_stack.${index}`} />
                          </div>
                          <button type="button" onClick={() => remove(index)}>
                            X
                          </button>
                        </>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>

              <FieldArray name="salary">
                {({ push, remove }) => {
                  return (
                    <div className="form__set">
                      <button
                        type="button"
                        onClick={() => push({ from: 0, to: 0, type: '' })}
                      >
                        Add salary
                      </button>
                      {values.salary.map((salary, index) => (
                        <>
                          <div>
                            <label htmlFor="name">Od</label>
                            <Field name={`salary.${index}.from`} />
                          </div>
                          <div>
                            <label htmlFor="name">Do</label>
                            <Field name={`salary.${index}.to`} />
                          </div>
                          <div>
                            <label htmlFor="name">Typ</label>
                            <Field name={`salary.${index}.type`} />
                          </div>
                          <button type="button" onClick={() => remove(index)}>
                            X
                          </button>
                        </>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>

              <FieldArray name="benefits">
                {({ push, remove }) => {
                  return (
                    <div className="form__set">
                      <button type="button" onClick={() => push({ name: '' })}>
                        Add salary
                      </button>
                      {values.benefits.map((benefit, index) => (
                        <>
                          <div>
                            <label htmlFor="name">Nazwa</label>
                            <Field name={`benefits.${index}.name`} />
                          </div>

                          <button type="button" onClick={() => remove(index)}>
                            X
                          </button>
                        </>
                      ))}
                    </div>
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
