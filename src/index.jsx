import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

//import App from './components/App';
import Home from './components/Home';

import './styles/utilities/reset.scss';
import './styles/base/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
