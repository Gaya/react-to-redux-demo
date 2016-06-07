import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const App = props => (
  <section>
    <h1>Contacts in React</h1>
    { props.children }
  </section>
);

const Contacts = props => props.children || <section>Contacts list</section>;

const Contact = () => <section>I am a contact!</section>;

const NoMatch = () => <section>Sorry, page not found!</section>;

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
), document.body);
