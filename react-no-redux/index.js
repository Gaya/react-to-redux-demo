import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import NoMatch from './components/no-match';

import Contacts from './components/contacts';
import Contact from './components/contact-details';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Contacts}/>
      <Route path="contacts" component={Contacts}>
        <Route path="/contact/:contactId" component={Contact}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));
