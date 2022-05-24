import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
     .min(0, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
});

export const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    first_name: Yup.string()
      .min(0, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(0, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
  