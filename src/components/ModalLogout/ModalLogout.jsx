import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalLogout.module.css';

const ModalLogout = ({
  closeModal = () => {
    console.log('closeModal');
  },
}) => {
  const handleClick = ({ target }) => {
    if (target.name === 'cancel') {
      closeModal();
    } else if (target.name === 'logout') {
      // onLogout(); // .then(() => closeModal()) - onLogout - операция разлогинивания которая возвращает промис
    }
  };

  return (
    <div className={styles.modal}>
      <p className={styles.text}>
        Якщо Ви вийдете з програми незбережені дані будуть втрачені
      </p>
      <div className={styles.buttonContainer}>
        <button type="button" name="cancel" onClick={handleClick}>
          Відміна
        </button>
        <button type="button" name="logout" onClick={handleClick}>
          Вийти
        </button>
      </div>
    </div>
  );
};

ModalLogout.propTypes = {
  closeModal: PropTypes.func,
};

ModalLogout.defaultProps = {
  closeModal: () => {},
};

export default ModalLogout;
