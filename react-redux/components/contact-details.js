import React from 'react';
import { connect } from 'react-redux';

import Loading from './loading';
import Favourite from './favourite-switch';
import Twitter from './twitter-input';

const ContactDetails = ({ loading, name, id, favourite, twitter }) => {
  if (loading) {
    return <Loading>Loading contact</Loading>;
  }

  return <section>
    <h2>
      { name }

      <Favourite contactId={ id } on={ favourite } />
    </h2>


    <Twitter contactId={ id } username={ twitter } />
  </section>;
};

function mapStateToProps(state, ownProps) {
  let contact = Object.assign({}, {
    id: null,
    loading: true,
    name: null,
    favourite: false,
    twitter: null,
  }, state.contacts.items.find(
    contact => contact.id === parseInt(ownProps.params.contactId)
  ));

  return {
    id: contact.id,
    loading: contact.loading,
    name: contact.name,
    favourite: contact.favourite,
    twitter: contact.twitter,
  };
}

export default connect(
  mapStateToProps
)(ContactDetails);
