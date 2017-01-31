import React from 'react';
import ReactDOM from 'react-dom';

//import { render } from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//import 'current-input';

import { Provider } from 'react-redux';
//import store, { history } from './store';
import store from './store';

//import App from './components/App';
import Home from './components/Home';

import './styles/utilities/reset.scss';
import './styles/base/main.scss';


// const routes = (
//   <Route path="/" mapMenuTitle="Home" component={App}>
//     <IndexRoute component={Home} />
//   </Route>
// );

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);


// render(
//   <Provider store={store}>
//     <Router
//       history={browserHistory}
//       routes={routes}
//     />
//   </Provider>,
//   document.getElementById('root')
// );
