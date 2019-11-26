import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegistrationPage from '../../components/RegistrationPage/RegistrationPage';

function Auth() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route path="/registration" component={RegistrationPage} />
    </Switch>
  );
}

export default Auth;
