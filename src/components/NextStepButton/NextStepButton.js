import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NextStepButton.module.css';

const NextStepButton = () => {
  return (
    <div className={styles.nextStepButton__wrapper}>
      <button type="button" className={styles.nextStepButton__button}>
        <NavLink to="/training">Сформувати тренування</NavLink>
      </button>
    </div>
  );
};

export default NextStepButton;
