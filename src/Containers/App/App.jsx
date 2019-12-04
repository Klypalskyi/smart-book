import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Auth from '../../pages/Auth/Auth';
import LibraryPage from '../../pages/LibraryPage/LibraryPage';
import TrainingPage from '../../pages/TrainingPage/TrainingPage';
import { refreshUser } from '../../services/API';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
// import PropTypes from 'prop-types'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser(), []);
  });

  return (
    <>
      <CssBaseline />
      <Switch>
        <ProtectedRoute
          component={LibraryPage}
          path="/library"
          redirectTo="/login"
        />
        <ProtectedRoute
          component={TrainingPage}
          path="/training"
          redirectTo="/login"
        />
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
