import React from 'react';
import styles from './RegistrationPage.module.css';
import GoogleButton from '../GoogleButton/GoogleButton';

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <GoogleButton />
    </div>
  );
};

// RegistrationPage.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// RegistrationPage.defaultProps = {
//   // bla: 'test',
// };

export default RegistrationPage;
