import { Formik, Form, Field, FieldArray } from 'formik';
import { FC, useState } from 'react';
import { IRecruter, ICompany, ISalary, IBenefit } from '../models/data';

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
              <div>
                <label htmlFor="name">Imię i nazwisko</label>
                <Field name="recruter.name" />
              </div>
              <div>
                <label htmlFor="name">Kontakt</label>
                <Field name="recruter.contact" />
              </div>
              <FieldArray name="recruter.steps">
                {({ push, remove }) => {
                  return (
                    <div>
                      <button
                        type="button"
                        onClick={() => push({ type: '', when: '' })}
                      >
                        Add step
                      </button>
                      {values.recruter.steps.map((step, index) => (
                        <>
                          <div>
                            <label htmlFor="name">Typ</label>
                            <Field name={`recruter.steps.${index}.type`} />
                          </div>
                          <div>
                            <label htmlFor="name">Kiedy</label>
                            <Field name={`recruter.steps.${index}.when`} />
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

              <hr />

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

              <hr />

              <FieldArray name="tech_stack">
                {({ push, remove }) => {
                  return (
                    <div>
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

              <hr />

              <FieldArray name="salary">
                {({ push, remove }) => {
                  return (
                    <div>
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

              <hr />

              <FieldArray name="benefits">
                {({ push, remove }) => {
                  return (
                    <div>
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
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddNewBlock;
