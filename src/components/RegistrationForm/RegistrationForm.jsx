import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './RegistrationForm.module.css';
import Label from '../shared/Label/Label';
import Input from '../shared/Input/Input';

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const inputChange = ({ target }) => {
    const { name, value } = target;
    return name === 'email'
      ? setEmail(value)
      : name === 'login'
      ? setLogin(value)
      : name === 'password'
      ? setPassword(value)
      : setConfirm(value);
  };

  return (
    <div className={styles.container}>
      <button type="button">Google</button>
      <form className="RegistrationPageWrapper">
        <Label value="login" title="Ім'я" required>
          <Input value={login} name="login" onChange={inputChange} />
        </Label>
        <Label value="email" title="Електронна адреса" required>
          <Input
            value={email}
            name="email"
            onChange={inputChange}
            placeholder="your@email.com"
            type="email"
          />
        </Label>
        <Label value="password" title="Пароль" required>
          <Input
            value={password}
            name="password"
            type="password"
            onChange={inputChange}
          />
        </Label>
        <Label value="confirm" title="Пыдтвердити пароль" required>
          <Input
            value={confirm}
            name="confirm"
            type="password"
            onChange={inputChange}
          />
        </Label>

        <button className={styles.button} type="submit">
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

// RegistrationPage.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// RegistrationPage.defaultProps = {
//   // bla: 'test',
// };

export default RegistrationForm;
