import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth/actions';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { LoginSchema } from '../../validations/authValidation';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    dispatch(login(values.email, values.password, () => navigate('/')))
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <br />
            <span><Link to="/register">Register</Link></span>
        </div>
    )
};
export default Login