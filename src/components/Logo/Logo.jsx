import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => (
  <Link className={styles.logo} to="/">
    BR
  </Link>
);

Logo.propTypes = {
  // bla: PropTypes.string,
};

Logo.defaultProps = {
  // bla: 'test',
};

export default Logo;
