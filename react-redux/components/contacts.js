import React from 'react';

import Events from '../core/events';

import Loading from './loading';
import Contact from './contacts-result';

export default React.createClass({
  getInitialState() {
    return {
      contacts: [],
      loading: true,
    };
  },

  componentDidMount() {
    fetch('/contacts.json')
      .then((response) => response.json())
      .then(this.setContactsResult);

    Events.addListener('changeFavourite', this.handleFavourite);
  },

  componentWillUnmount() {
    Events.removeListener('changeFavourite', this.handleFavourite);
  },

  handleFavourite(isActive, contactId) {
    this.setState({
      contacts: this.state.contacts.map(contact => {
        if (contact.id === contactId) {
          return {
            ...contact,
            favourite: isActive,
          };
        }

        return contact;
      }),
    });
  },

  setContactsResult(contacts) {
    this.setState({
      loading: false,
      contacts,
    });
  },

  list() {
    if (this.state.loading) {
      return <Loading>Loading contacts</Loading>;
    }

    if (this.state.contacts.length === 0) {
      return <section>No contacts found.</section>;
    }

    return <ul className='list-group'>
      {this.state.contacts.map(contact => <Contact key={contact.id} { ...contact } />)}
    </ul>;
  },

  render() {
    return this.props.children || this.list();
  },
});
