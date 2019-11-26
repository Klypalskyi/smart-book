/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App/App';
import createStore from './createStore';
import * as serviceWorker from './serviceWorker';
import './assets/css/normalize.css';
import './assets/css/fonts.css';
import './assets/css/main.css';
import './assets/css/var.css';

// const initStore = {};
const store = createStore;

// eslint-disable-next-line no-unused-vars
const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>{' '}
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./containers/App/App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
