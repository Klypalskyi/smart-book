import React from 'react';
import { Link } from 'react-router-dom';
import css from './RegistrationForm.module.css';

const FormOfRegistration = ({
  onChange,
  onSubmit,
  userName,
  email,
  password,
  passwordRepeat,
}) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label htmlFor="userName">
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
        />
      </label>
      <label htmlFor="email">
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
        />
      </label>
      <label htmlFor="password">
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
        />
      </label>
      <label htmlFor="passwordRepeat">
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
        />
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
