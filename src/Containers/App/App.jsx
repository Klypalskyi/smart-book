import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Results from '../../components/Results/Results';

// import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <CssBaseline />
      {/* ... bottom place your components */}
      <Results />
    </>
  );
}

export default App;
