import React from 'react';
import style from './TrainingPage.module.css';
import Timer from '../../components/Timer/Timer';
import Results from '../../components/Results/Results';

const TrainingPage = () => {
  return (
    <div className={style.container}>
      <Timer />
      <Results />
    </div>
  );
};

export default TrainingPage;
