import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import ReduxThunk from 'redux-thunk';

import App from './components/app';
import NoMatch from './components/no-match';

import Contacts from './components/contacts';
import Contact from './components/contact-details';

import Twitter from './components/twitter-accounts';

const reducers = {};

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const History = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={History}>
      <Route path="/" component={App}>
        <IndexRoute component={Contacts}/>
        <Route path="contacts" component={Contacts}>
          <Route path="/contact/:contactId" component={Contact}/>
        </Route>
        <Route path="twitter" component={Twitter} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
