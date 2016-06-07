import React from 'react';

import Loading from './loading';
import Favourite from './favourite-switch';
import Twitter from './twitter-input';

export default React.createClass({
  getInitialState() {
    return {
      loading: true,
      name: null,
      favourite: false,
      twitter: null,
    };
  },

  componentDidMount() {
    fetch('/contacts.json')
      .then((response) => response.json())
      .then(this.filterContactsResult)
      .then(this.setContactResult);
  },

  filterContactsResult(contacts) {
    return contacts.find(contact => contact.id === this.getContactId());
  },

  setContactResult(contact) {
    this.setState({
      loading: false,
      ...contact,
    });
  },

  getContactId() {
    return parseInt(this.props.params.contactId);
  },

  twitter() {
    if (!this.state.twitter) {
      return null;
    }

    return <Twitter username={this.state.twitter} />;
  },

  render() {
    if (this.state.loading) {
      return <Loading>Loading contact</Loading>;
    }

    return <section>
      <h2>{ this.state.name }</h2>
      <Favourite on={ this.state.favourite } />

      {this.twitter()}
    </section>;
  },
});
