import React from 'react';
import { Link } from 'react-router-dom';
import css from './RegistrationForm.module.css';
import withAuthRedirect from '../WithAuthRedirect/WithAuthRedirect';

const FormOfRegistration = () => (
  <form className={css.form}>
    <label htmlFor="name">
      <h2>
        Ім&apos;я <span>*</span>
      </h2>
      <input type="input" id="name" name="name" placeholder="..." />
    </label>
    <label htmlFor="email">
      <h2>
        Електронна адреса <span>*</span>
      </h2>
      <input
        type="input"
        id="email"
        name="email"
        placeholder="your@email.com"
      />
    </label>
    <label htmlFor="password">
      <h2>
        Пароль <span>*</span>
      </h2>
      <input type="input" id="password" name="password" placeholder="..." />
    </label>
    <label htmlFor="passwordRepeat">
      <h2>
        Підтвердити пароль <span>*</span>
      </h2>
      <input
        type="input"
        id="passwordRepeat"
        name="passwordRepeat"
        placeholder="..."
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

export default withAuthRedirect(FormOfRegistration);
