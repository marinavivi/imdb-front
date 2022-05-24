import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth/actions';
import { Link, useNavigate } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  return errors;
};


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      dispatch(login(values.email, values.password,  () => navigate('/')))
    },
  });
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="lastName">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <button type="submit">Submit</button>
      </form>
      <br/><Link to="/register">Register</Link>
    </div>
  );
};
export default Login