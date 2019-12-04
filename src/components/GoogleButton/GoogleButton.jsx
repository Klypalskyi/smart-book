import React from 'react';
import styles from './GoogleButton.module.css';
import googleLogo from '../../assets/icons/googleLogo.png';
import googleLogo2x from '../../assets/icons/googleLogo@2x.png';
import googleLogo3x from '../../assets/icons/googleLogo@3x.png';
import { urlList } from '../../api/apiEndpoint';

const GoogleButton = () => {
  const { googleAuth } = urlList;

  return (
    <a href={googleAuth} className={styles.googleLink}>
      <img
        className={styles.logo}
        src={googleLogo}
        srcSet={`${googleLogo2x} 2x, ${googleLogo3x} 3x`}
        alt="google-logo"
      />
      <p className={styles.text}>Google</p>
    </a>
  );
};

export default GoogleButton;
