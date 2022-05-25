import React from "react";
import { Formik, Form, Field } from "formik";
import { RegisterSchema } from "../../validations/authValidation";

const Register = ({ handleOnSubmit }) => {
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{
          email: "",
          first_name: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => handleOnSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="first_name" />
            {errors.first_name && touched.first_name ? (
              <div>{errors.first_name}</div>
            ) : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
