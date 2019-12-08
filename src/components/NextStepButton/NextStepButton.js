import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NextStepButton.module.css';

const NextStepButton = () => {
  return (
    <div className={styles.nextStepButton__wrapper}>
      <Link to="/training" className={styles.nextStepButton__button}>
        Сформувати тренування
      </Link>
    </div>
  );
};

export default NextStepButton;
