import React from 'react';
import styles from './NextStepButton.module.css';

const NextStepButton = () => {
  return (
    <div className={styles.nextStepButton__styles}>
      <button type="button" className={styles.nextStepButton__button}>
        Next
      </button>
    </div>
  );
};

export default NextStepButton;
