import React from 'react';
import { useSelector } from 'react-redux';
import style from './TrainingPage.module.css';
import PanelOfTimers from '../../components/Timer/PanelOfTimers';
import Results from '../../components/Results/Results';
import Goal from '../../components/Goal/Goal';
import { getTraining } from '../../services/API';

const TrainingPage = () => {
  // const state = useSelector(state => state);
  // console.log(state);

  const token = useSelector(state => state.session.token);
  // console.log(token);

  getTraining(token);

  return (
    <div className={style.container}>
      <Goal />
      <PanelOfTimers />
      <Results />
    </div>
  );
};

export default TrainingPage;
