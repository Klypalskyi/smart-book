import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => (
  <form className={styles.form}>
    <label className={styles.label} htmlFor="email">
      <p className={styles.emailText}>Електронна адреса</p>
      <input
        type="email"
        placeholder="your@email.com"
        className={styles.emailInput}
      />
    </label>
    <label className={styles.label} htmlFor="password">
      <p className={styles.passwordText}>Пароль</p>
      <input
        type="password"
        placeholder="Пароль"
        className={styles.passwordInput}
      />
    </label>
    <button type="submit" className={styles.logInButton}>
      Войти
    </button>
    <Link to="/registration" className={styles.singInLink}>
      Реєстрація
    </Link>
  </form>
);

export default LoginPage;
