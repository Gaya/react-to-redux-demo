import React from 'react';
import { Link } from 'react-router';

export default props => (
  <section>
    <h1>Contacts in React</h1>
    <nav className='navbar navbar-default'>
      <ul className='nav navbar-nav'>
        <li>
          <Link to='/contacts'>View contacts</Link>
        </li>
        <li>
          <Link to='/twitter'>Twitter accounts</Link>
        </li>
      </ul>
    </nav>
    { props.children }
  </section>
);
