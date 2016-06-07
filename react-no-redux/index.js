import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

const App = props => (
  <section>
    <h1>Contacts in React!</h1>
    { props.children }
  </section>
);

const About = () => <section>About</section>;
const Users = props => props.children || <section>Users</section>;
const User = () => <section>I am a User</section>;
const NoMatch = () => <section>Sorry, page not found!</section>;

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body);
