import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import { login } from '../../services/API';
import withAuthRedirect from '../WithAuthRedirect/WithAuthRedirect';
import withConnectByGoogle from '../../hoc/WithConnectByGoogle';

const LoginPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email обов'язкове поле"),
      password: Yup.string()
        .min(6, 'Пароль має бути не менше 6 символів')
        .required("Password обов'язкове поле"),
    }),
    onSubmit: values => {
      JSON.stringify(values, null, 2);
      const credential = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(credential));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label className={styles.label} htmlFor="email">
        <p className={styles.emailText}>Електронна адреса</p>
        <input
          placeholder="your@email.com"
          type="email"
          {...formik.getFieldProps('email')}
          className={styles.emailInput}
        />
      </label>
      {formik.touched.email && formik.errors.email ? (
        <span className={styles.emailError}>{formik.errors.email}</span>
      ) : null}
      <label className={styles.label} htmlFor="password">
        <p className={styles.passwordText}>Пароль</p>
        <input
          placeholder="Пароль"
          type="password"
          {...formik.getFieldProps('password')}
          className={styles.passwordInput}
        />
      </label>
      {formik.touched.password && formik.errors.password ? (
        <span className={styles.passwordError}>{formik.errors.password}</span>
      ) : null}
      <button type="submit" className={styles.logInButton}>
        Увійти
      </button>
      <Link to="/registration" className={styles.singInLink}>
        Реєстрація
      </Link>
    </form>
  );
};

export default withConnectByGoogle(withAuthRedirect(LoginPage));
