import React from 'react';
import { connect } from 'react-redux';

import Events from '../core/events';

import Loading from './loading';
import Favourite from './favourite-switch';
import Twitter from './twitter-input';

const ContactDetails = React.createClass({
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

    Events.addListener('changeFavourite', this.handleFavourite);
  },

  componentWillUnmount() {
    Events.removeListener('changeFavourite', this.handleFavourite);
  },

  handleFavourite(isActive) {
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

function mapStateToProps(state) {
  return {
    loading: true,
    name: null,
    favourite: false,
    twitter: null,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetails);
