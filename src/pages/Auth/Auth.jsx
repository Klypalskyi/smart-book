import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import RegistrationPage from '../../components/RegistrationPage/RegistrationPage'

function Auth () {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Route path='/login' component={RegistrationPage} />
      <Route path='/registration' component={RegistrationPage} />
    </Switch>
  )
}

export default Auth
