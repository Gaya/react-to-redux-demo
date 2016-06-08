import React from 'react';

import Events from '../core/events';

import Loading from './loading';
import Favourite from './favourite-switch';
import Twitter from './twitter-input';

export default React.createClass({
  getInitialState() {
    return {
      id: null,
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

    Events.addListener('changeFavourite', this.handleFavourite);
  },

  componentWillUnmount() {
    Events.removeListener('changeFavourite', this.handleFavourite);
  },

  handleFavourite(isActive, contactId) {
    if (contactId !== this.state.id) {
      return null;
    }

    this.setState({
      favourite: isActive,
    });
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
    return <Twitter contactId={ this.state.id } username={this.state.twitter} />;
  },

  render() {
    if (this.state.loading) {
      return <Loading>Loading contact</Loading>;
    }

    return <section>
      <h2>
        { this.state.name }

        <Favourite contactId={ this.state.id } on={ this.state.favourite } />
      </h2>


      {this.twitter()}
    </section>;
  },
});
