import React from 'react';

import Loading from './loading';

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
    return contacts.filter(contact => contact.id === this.getContactId())[0];
  },

  setContactsResult(contact) {
    this.setState({
      loading: false,
      ...contact,
    });
  },

  getContactId() {
    return this.props.params.contactId;
  },

  render() {
    if (this.state.loading) {
      return <Loading>Loading contact</Loading>;
    }

    return <section>I am a contact!</section>;
  },
});
