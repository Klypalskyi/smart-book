import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../Logo/Logo';
import ModalLogout from '../ModalLogout/ModalLogout';
import styles from './Header.module.css';
import { openModal } from '../Backdrop/backdropActions';
import {
  getIsModalOpen,
  getAuthenticated,
} from '../../redux/selectors/sessionSelectors';

const Header = () => {
  const isModalOpen = useSelector(state => getIsModalOpen(state));
  const dispatch = useDispatch();

  const handleOpenModalLogout = () => {
    dispatch(openModal());
  };

  const authenticated = useSelector(state => getAuthenticated(state));

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <div className={styles.modalLogOut}>
          <ModalLogout />
        </div>
      )}
      <Logo />
      {authenticated && (
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
      )}
    </div>
  );
};

export default Header;
