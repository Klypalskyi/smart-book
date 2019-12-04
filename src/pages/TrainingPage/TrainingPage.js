import React from 'react';
import style from './TrainingPage.module.css';
import PanelOfTimers from '../../components/Timer/PanelOfTimers';
import Results from '../../components/Results/Results';

const TrainingPage = () => {
  return (
    <div className={style.container}>
      <PanelOfTimers />
      <Results />
    </div>
  );
};

export default TrainingPage;
