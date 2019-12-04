import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Auth from '../../pages/Auth/Auth';
import LibraryPage from '../../pages/LibraryPage/LibraryPage';
import TrainingPage from '../../pages/TrainingPage/TrainingPage';
// import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/library">
          <LibraryPage />
        </Route>
        <Route path="/training">
          <TrainingPage />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
        <Route path="*">
          <div>create page for 404</div>
        </Route>
      </Switch>
      {/* ... bottom place your components */}
    </>
  );
}

export default App;
