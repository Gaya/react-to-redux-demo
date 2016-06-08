import React from 'react';
import { connect } from 'react-redux';

const TwitterAccount = ({ accounts }) => (
  <section>
    <h2>Contacts with a Twitter account</h2>
    {accounts.map(account => <span key={account}>{ account } </span>)}
  </section>
);

function twitterAccountsFromContacts(contacts) {
  return contacts.filter(contact =>
    typeof contact.twitter === 'string' && contact.twitter !== '')
    .map(contact => contact.twitter);
}

function mapStateToProps(state) {
  return {
    accounts: twitterAccountsFromContacts(state.contacts.items),
  };
}

export default connect(
  mapStateToProps,
)(TwitterAccount);
