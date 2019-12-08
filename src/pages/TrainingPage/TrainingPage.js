import React, { useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import style from './TrainingPage.module.css';
import PanelOfTimers from '../../components/Timer/PanelOfTimers';
import Results from '../../components/Results/Results';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import Workout from '../../components/Workout/Workout';
import Goal from '../../components/Goal/Goal';
import { getTrainingFromServer } from '../../services/API';

const TrainingPage = ({ modalCongratsOpen }) => {
  const token = useSelector(state => state.session.token);
  const haveTraining = useSelector(state => state.user.haveTraining);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrainingFromServer(token));
  }, []);

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
        <Workout />
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
