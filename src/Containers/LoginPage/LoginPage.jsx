import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginPage.module.css';

const LoginPage = props => {
  return (
    // <div className={styles.generalWrapper}>
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <button type="button" className={styles.googleButton}>
          Google
        </button>
        <div className={styles.inputWrapper}>
          <p className={styles.emailText}>Електронна адреса</p>
          <input
            type="email"
            placeholder="your@email.com"
            className={styles.emailInput}
          />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.passwordText}>Пароль</p>
          <input
            type="password"
            placeholder="Пароль"
            className={styles.passwordInput}
          />
        </div>
        <button type="button" className={styles.logInButton}>
          Войти
        </button>
        <a className={styles.singInLink} href="/">
          Реєстрація
        </a>
      </div>

      <div className={styles.wrapperQuote}>
        <p className={styles.quote}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore
          praesentium enim,jrenfekrfnjfnjkndkjnfkjd orengfernfeinrign jfdnjfd
          nrfgeoigr rneogreg nrejgnerin egngrieur
        </p>
        <p className={styles.quoteAuthor}>Author</p>
      </div>
    </div>
    // </div>
  );
};

LoginPage.propTypes = {
  // bla: PropTypes.string,
};

LoginPage.defaultProps = {
  // bla: 'test',
};

export default LoginPage;
