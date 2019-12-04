import React from 'react';
import PropTypes from 'prop-types';
import styles from './Goal.module.css';

const Goal = ({ isThisStatPage = false }) => {
  console.log(isThisStatPage);
  return (
    <div
      className={
        isThisStatPage ? styles.goalContainerStat : styles.goalContainer
      }
    >
      <div
        className={
          isThisStatPage ? styles.goalTitleBoxStat : styles.goalTitleBox
        }
      >
        <p className={styles.goalTitle}>Моя мета прочитати</p>
      </div>
      <div
        className={isThisStatPage ? styles.goalBodyBoxStat : styles.goalBodyBox}
      >
        <div
          className={
            isThisStatPage ? styles.goalDigitsBoxStat : styles.goalDigitsBox
          }
        >
          <p
            className={
              isThisStatPage ? styles.goalDigitsStat : styles.goalDigits
            }
          >
            123
          </p>
          <p className={isThisStatPage ? styles.goalTextStat : styles.goalText}>
            Кількість книжок
          </p>
        </div>
        <div
          className={
            isThisStatPage ? styles.goalDigitsBoxStat : styles.goalDigitsBox
          }
        >
          <p
            className={
              isThisStatPage ? styles.goalDigitsStat : styles.goalDigits
            }
          >
            !
          </p>
          <p className={isThisStatPage ? styles.goalTextStat : styles.goalText}>
            Кількість днів
          </p>
        </div>
        {isThisStatPage && (
          <div
            className={
              isThisStatPage ? styles.goalDigitsBoxStat : styles.goalDigitsBox
            }
          >
            <p
              className={
                isThisStatPage
                  ? styles.goalDigitsStatLast
                  : styles.goalDigitsStat
              }
            >
              123
            </p>
            <p
              className={isThisStatPage ? styles.goalTextStat : styles.goalText}
            >
              Залишилось <br /> книжок
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
Goal.propTypes = {
  isThisStatPage: PropTypes.bool,
};

Goal.defaultProps = {
  isThisStatPage: false,
};

export default Goal;
