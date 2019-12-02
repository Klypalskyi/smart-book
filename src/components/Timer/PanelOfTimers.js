import React from 'react';
import Timer from './Timer';
import css from './PanelOfTimers.module.css';

const PanelOfTimers = () => (
  <div className={css.panel}>
    <Timer title="До закінчення року залишилось" />
    <Timer title="До досягнення мети залишилось" />
  </div>
);

export default PanelOfTimers;
