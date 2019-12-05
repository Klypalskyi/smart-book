import React, { useState } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import { registration } from '../../services/API';

// helpers
const checkingPasswordsForIdentity = (pass, repeatPass) => {
  return String(pass) === String(repeatPass);
};

const validationOfEmail = value => {
  const regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const emailIsValid = regExp.test(value);

  return emailIsValid;
};

const validationOfPassword = value => {
  const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const passwordIsValid = regExp.test(value);

  return passwordIsValid;
};

const validationForm = (password, passwordRepeat, email) => {
  if (!validationOfPassword(password)) {
    console.log('Show CSS for error in validation Password');
  } else if (!checkingPasswordsForIdentity(password, passwordRepeat)) {
    console.log('Show CSS for error in validation Password-Repeat');
  } else if (!validationOfEmail(email)) {
    console.log('Show CSS email Email');
  }
};

// helpers -END

const ContainerRegistrationForm = props => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handlerChangeInput = ({ target }) => {
    const { name, value } = target;
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'passwordRepeat') {
      setPasswordRepeat(value);
    }
    console.log(inputsObj);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const { registration } = props;
    // const [errorText, setErrorText] = useState(null);

    // if (!validationOfPassword(password)) {
    //   console.log('Show CSS for error in validation Password');
    // } else if (!checkingPasswordsForIdentity(password, passwordRepeat)) {
    //   console.log('Show CSS for error in validation Password-Repeat');
    // } else if (!validationOfEmail(email)) {
    //   console.log('Show CSS email Email');
    // }

    const userObj = {
      name: { fullName: userName },
      email,
      password,
    };
    console.log('form', userObj);
    registration(userObj);
  };

  return (
    <RegistrationForm
      onChange={handlerChangeInput}
      onSubmit={handlerSubmit}
      userName={userName}
      email={email}
      password={password}
      passwordRepeat={passwordRepeat}
    />
  );
};

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registration,
};

export default connect(null, mapDispatchToProps)(ContainerRegistrationForm);
