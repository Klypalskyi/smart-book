import React from 'react';
import { Link } from 'react-router-dom';
import css from './RegistrationForm.module.css';

const FormOfRegistration = ({
  formik,
  onChange,
  onSubmit,
  onBlur,
  userName,
  email,
  password,
  passwordRepeat,
}) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.label} htmlFor="userName">
        <h2>
          Ім&apos;я <span>*</span>
        </h2>
        <input
          type="input"
          id="userName"
          name="userName"
          value={userName}
          placeholder="..."
          onChange={onChange}
          onBlur={onBlur}
        />
        {formik.errors.userName && formik.touched.userName ? (
          <div className={css.error}>{formik.errors.userName}</div>
        ) : null}
      </label>

      <label className={css.label} htmlFor="email">
        <h2>
          Електронна адреса <span>*</span>
        </h2>
        <input
          type="input"
          id="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          onChange={onChange}
          onBlur={onBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className={css.error}>{formik.errors.email}</div>
        ) : null}
      </label>
      <label className={css.label} htmlFor="password">
        <h2>
          Пароль <span>*</span>
        </h2>
        <input
          type="input"
          id="password"
          name="password"
          value={password}
          placeholder="..."
          onChange={onChange}
          onBlur={onBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <div className={css.error}>{formik.errors.password}</div>
        ) : null}
      </label>
      <label className={css.label} htmlFor="passwordRepeat">
        <h2>
          Підтвердити пароль <span>*</span>
        </h2>
        <input
          type="input"
          id="passwordRepeat"
          name="passwordRepeat"
          value={passwordRepeat}
          placeholder="..."
          onChange={onChange}
          onBlur={onBlur}
        />
        {formik.errors.passwordRepeat && formik.touched.passwordRepeat ? (
          <div className={css.error}>{formik.errors.passwordRepeat}</div>
        ) : null}
      </label>
      <button type="submit">Зареєструватися</button>
      <p>
        <span>Вже з нами? </span>
        <Link to="/login" className={css.link}>
          Увійти
        </Link>
      </p>
    </form>
  );
};

export default FormOfRegistration;
