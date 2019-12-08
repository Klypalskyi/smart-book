import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import style from './TrainingPage.module.css';
import PanelOfTimers from '../../components/Timer/PanelOfTimers';
import Results from '../../components/Results/Results';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import Workout from '../../components/Workout/Workout';
import Goal from '../../components/Goal/Goal';
import Chart from '../../components/Chart/Chart';
import { getTrainingFromServer } from '../../services/API';

import CreateTraningGoal from '../../components/CreateTraningGoal/CreateTraningGoal';

const TrainingPage = ({ modalCongratsOpen }) => {
  const [goal, setGoal] = useState({
    startTime: new Date(),
    finishTime: new Date(),
    countBooks: 0,
  });
  const token = useSelector(state => state.session.token);
  const haveTraining = useSelector(state => state.user.haveTraining);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrainingFromServer(token));
  }, []);

  const handleChangeToGoal = field => {
    setGoal({ ...goal, ...field });
  };

  return (
    <div className={style.container}>
      {modalCongratsOpen && <ModalCongrats />}
      {haveTraining ? (
        <div className={style.wrapper}>
          <PanelOfTimers />
          <Workout />
          <Goal />
          <Results />
        </div>
      ) : (
        <>
          <CreateTraningGoal {...goal} />
          <div className={style.someContainer}>
            <Workout handleChangeToGoal={handleChangeToGoal} />
            <Chart />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  modalCongratsOpen: state.componentController.modalCongratsOpen,
});

TrainingPage.propTypes = {
  modalCongratsOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(TrainingPage);
