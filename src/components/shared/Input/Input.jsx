import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ type, name, value, onChange, ...rest }) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      {...rest}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => null,
  name: '',
};

export default Input;
