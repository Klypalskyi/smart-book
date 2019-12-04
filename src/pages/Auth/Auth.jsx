import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/ContainerRegistrationForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import styles from './Auth.module.css';

function Auth() {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={
          pathname === '/registration'
            ? styles.regContainer
            : styles.loginContainer
        }
      >
        <div className={styles.formContainer}>
          <GoogleButton />
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/registration">
              <RegistrationForm />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Auth;
