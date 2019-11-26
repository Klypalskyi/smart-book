import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

const Label = ({ value, children, customStyles, title, required }) => (
  <label htmlFor={value} className={styles.label} customStyles={customStyles}>
    <p className={required ? styles.requiredLabelText : styles.labelText}>
      {title}
    </p>
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.string,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Label.defaultProps = {
  customStyles: '',
  required: false,
};

export default Label;
