import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BooksList from '../../components/BooksList/BooksList';
// import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <CssBaseline />
      <BooksList />
      {/* ... bottom place your components */}
    </>
  );
}

export default App;
