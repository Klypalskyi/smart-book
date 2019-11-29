import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginPage from '../../components/LoginPage/LoginPage';

// import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <CssBaseline />
      {/* ... bottom place your components */}
      <LoginPage />
    </>
  );
}

export default App;
