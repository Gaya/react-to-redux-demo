import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      contacts: [],
      loading: true,
    };
  },

  list() {
    if (this.state.loading) {
      return <div className='progress'>
        <div className='progress-bar progress-bar-info progress-bar-striped active'
             style={{ width: '100%', }} />
      </div>;
    }

    return <section>Contacts list</section>;
  },

  render() {
    return this.props.children || this.list();
  },
});
