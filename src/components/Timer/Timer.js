import React from 'react';
import PropTypes from 'prop-types';
import css from './Timer.module.css';

const Timer = ({ title }) => (
  <div className={css.container}>
    <h2 className={css.title}>{title}</h2>
    <div className={css.timerPanel}>
      <p>
        <span className={css.value}>150</span>
        <span className={css.units}>дн</span>
      </p>
      <span>:</span>
      <p>
        <span className={css.value}>15</span>
        <span className={css.units}>год</span>
      </p>
      <span>:</span>
      <p>
        <span className={css.value}>30</span>
        <span className={css.units}>хв</span>
      </p>
      <span>:</span>
      <p>
        <span className={css.value}>17</span>
        <span className={css.units}>сек</span>
      </p>
    </div>
  </div>
);

Timer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Timer;
