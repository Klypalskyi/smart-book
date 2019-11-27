import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import PropTypes from 'prop-types'
import CustomButton from '../../shared-ui/CustomButton/CustomButton';

function App() {
  return (
    <>
      <CssBaseline />
      {/* ... bottom place your components */}
      <CustomButton variant="contained" size="large">
        Почати тренування
      </CustomButton>
      <CustomButton variant="outlined">simple 2</CustomButton>
    </>
  );
}

export default App;
