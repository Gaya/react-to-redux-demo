import React from 'react';
import { connect } from 'react-redux';

const TwitterAccount = ({ accounts = [] }) => (
  <section>
    <h2>Contacts with a Twitter Account</h2>

    {accounts.map(account => <span>{account}, </span>)}
  </section>
);

function mapStateToProp(state) {
  return {
    accounts: state.contacts.items
      .filter(contact => contact.twitter !== '')
      .map(contact => contact.twitter),
  };
}

export default connect(
  mapStateToProp,
)(TwitterAccount);
