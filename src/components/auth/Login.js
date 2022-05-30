import React from "react";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "../../validations/authValidation";
import { Link } from "react-router-dom";

const Login = ({ handleOnSubmit }) => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => handleOnSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field name="password" type="password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
};
export default Login;
