import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../store/auth/actions';
import { useNavigate } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.first_name) {
    errors.first_name = 'Required';
  } else if (values.first_name.length > 20) {
    errors.first_name = 'Must be 20 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  return errors;
};


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      dispatch(register(values.email, values.first_name, values.password, () => navigate('/')))
    },
  });
  return (
    <div>
      <h2>Register</h2>
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

        <label htmlFor="first_name">Name</label>
        <input
          id="first_name"
          name="first_name"
          type="first_name"
          onChange={formik.handleChange}
          value={formik.values.first_name}
        />
        {formik.errors.first_name ? <div>{formik.errors.first_name}</div> : null}

        <label htmlFor="password">Password</label>
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
    </div>
  );
};
export default Register