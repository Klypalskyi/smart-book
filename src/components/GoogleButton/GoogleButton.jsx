import React from 'react';
import styles from './GoogleButton.module.css';
import googleLogo from '../../assets/icons/googleLogo.png';
import googleLogo2x from '../../assets/icons/googleLogo@2x.png';
import googleLogo3x from '../../assets/icons/googleLogo@3x.png';
import url from '../../api/apiEndpoint';

const GoogleButton = () => {
  const handleClick = () => {
    document.location.replace(url.googleAuth);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <img
        className={styles.logo}
        src={googleLogo}
        srcSet={`${googleLogo2x} 2x, ${googleLogo3x} 3x`}
        alt="google-logo"
      />
      <p className={styles.text}>Google</p>
    </button>
  );
};

export default GoogleButton;
