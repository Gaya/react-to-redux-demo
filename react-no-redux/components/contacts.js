import React from 'react';

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
  },

  setContactsResult(contacts) {
    this.setState({
      loading: false,
      contacts,
    });
  },

  list() {
    if (this.state.loading) {
      return <div className='progress'>
        <div className='progress-bar progress-bar-info progress-bar-striped active'
             style={{ width: '100%', }}>
          Loading contacts
        </div>
      </div>;
    }

    if (this.state.contacts.length === 0) {
      return <section>No contacts found.</section>;
    }

    return <ul className='list-group'>
      {this.state.contacts.map(contact => <Contact { ...contact } />)}
    </ul>;
  },

  render() {
    return this.props.children || this.list();
  },
});
