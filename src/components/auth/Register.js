import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/auth/actions';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from '../../validations/authValidation';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    email: '',
                    first_name: '',
                    password: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={values => {
                    dispatch(register(values.email, values.first_name, values.password, () => navigate('/')))
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="first_name" />
                        {errors.first_name && touched.first_name ? <div>{errors.first_name}</div> : null}
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};
export default Register