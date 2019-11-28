import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Logo from '../Logo/Logo';
// import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => {
  const handleOpenModalLogout = () => {
    console.log('openModal');
  };

  return (
    <div className={styles.container}>
      <Logo />
      {/* <Link className={styles.logo} to="/">
        BR
      </Link> */}

      <div className={styles.nav}>
        <Link to="/training">
          <IconButton>
            <MenuBookIcon className={styles.icon} />
          </IconButton>
        </Link>
        <Link to="/library">
          <IconButton>
            <HomeOutlinedIcon className={styles.icon} />
          </IconButton>
        </Link>

        <div className={styles.bookPars}>
          <span className={styles.bookNameLetter}>C</span>
          <span className={styles.bookName}>Full Name of the Book</span>
        </div>
        <button
          type="button"
          className={styles.buttonExit}
          onClick={handleOpenModalLogout}
        >
          Вихiд
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
