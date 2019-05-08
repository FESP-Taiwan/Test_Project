// @flow
/* eslint global-require: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { getStore } from './store.js';
import App from './App.jsx';

const history = createHistory();
const store = getStore(history);

(async () => {
  ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('root'),
  );
})();
