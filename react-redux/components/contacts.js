import React from 'react';
import { connect } from 'react-redux';

import { fetchContacts, addContacts } from '../actions/contacts';

import Loading from './loading';
import Contact from './contacts-result';

const Contacts = React.createClass({
  componentDidMount() {
    let { contacts } = this.props;

    if (contacts && contacts.length === 0) {
      this.props.fetchContacts();
    }
  },

  render() {
    let { children, loading, contacts } = this.props;

    if (children) {
      return children;
    }

    if (loading) {
      return <Loading>Loading contacts</Loading>;
    }

    if (contacts && contacts.length === 0) {
      return <section>No contacts found.</section>;
    }

    return <ul className='list-group'>
      {contacts.map(contact => <Contact key={contact.id} { ...contact } />)}
    </ul>;
  },
});

function mapStateToProps(state) {
  return {
    loading: state.contacts.loading,
    contacts: state.contacts.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContactsJson() {
      fetch('/contacts.json')
        .then((response) => response.json())
        .then((contacts) => {
          dispatch(addContacts(contacts));
        });
    },

    fetchContacts() {
      dispatch(fetchContacts());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
