import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './TrainingPage.module.css';
import PanelOfTimers from '../../components/Timer/PanelOfTimers';
import Results from '../../components/Results/Results';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
// import { addGoal } from '../../redux/goal/goalActions';
import Workout from '../../components/Workout/Workout';

// const URL = 'https://book-read.goit.co.ua/api/v1';

const TrainingPage = ({ modalCongratsOpen }) => {
  useEffect(() => {
    // fetch(URL)
    //   .then(res => res.json())
    //   .then(data => addGoal(data.hits));
  }, []);

  return (
    <div className={style.container}>
      {/* <Goal /> */}
      <PanelOfTimers />
      <Results />
      {modalCongratsOpen && <ModalCongrats />}
      <Workout />
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
