import React from 'react';
import { Link } from 'react-router-dom';
import css from './FormOfRegistration.module.css';

const FormOfRegistration = () => (
  <form className={css.form}>
    <label>
      <h2>
        Ім'я <span>*</span>
      </h2>
      <input type="input" placeholder="..." />
    </label>
    <label>
      <h2>
        Електронна адреса <span>*</span>
      </h2>
      <input type="input" placeholder="your@email.com" />
    </label>
    <label>
      <h2>
        Пароль <span>*</span>
      </h2>
      <input type="input" placeholder="..." />
    </label>
    <label>
      <h2 className={css.tytle}>
        Підтвердити пароль <span>*</span>
      </h2>
      <input type="input" placeholder="..." />
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

export default FormOfRegistration;
