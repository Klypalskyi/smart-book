import React from 'react';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import styles from './RegistrationPage.module.css';
import GoogleButton from '../GoogleButton/GoogleButton';

const RegistrationPage = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <div className={styles.container}>
      <GoogleButton />
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
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
