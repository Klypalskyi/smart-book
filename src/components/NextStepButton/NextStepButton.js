import React from 'react';
import styles from './NextStepButton.module.css';

const NextStepButton = () => {
  return (
    <div className={styles.nextStepButton__wrapper}>
      <button type="button" className={styles.nextStepButton__button}>
        Сформувати тренування
      </button>
    </div>
  );
};

export default NextStepButton;
