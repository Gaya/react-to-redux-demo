import React from 'react';
import { connect } from 'react-redux';

const TwitterAccount = ({ accounts = [] }) => (
  <section>
    <h2>Contact with Twitter</h2>

    {accounts.map(account => <span key={account}>{account}, </span>)}
  </section>
);

function mapStateToProps(state) {
  return {
    accounts: state.contacts.items
      .filter(contact => contact.twitter !== '')
      .map(contact => contact.twitter),
  };
};

export default connect(
  mapStateToProps
)(TwitterAccount);
