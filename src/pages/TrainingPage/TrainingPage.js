import React from 'react';
import style from './TrainingPage.module.css';
import PanelOfTimers from '../../components/Timer/PanelOfTimers';
import Results from '../../components/Results/Results';
import Goal from '../../components/Goal/Goal';

const TrainingPage = () => {
  return (
    <div className={style.container}>
      <Goal />
      <PanelOfTimers />
      <Results />
    </div>
  );
};

export default TrainingPage;
