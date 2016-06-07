import React from 'react';

import Events from '../core/events';

export default React.createClass({
  getInitialState() {
    return {
      username: this.props.username || null,
    };
  },

  onChange(e) {
    var username = e.target.value;

    Events.emit('changeTwitter', username, this.props.contactId);

    this.setState({
      username: username,
    });
  },

  render() {
    return <fieldset>
      <div className='input-group input-group-sm'>
        <span className='input-group-addon'>@</span>
        <input type='text' className='form-control' placeholder='Username'
               value={ this.state.username } onChange={this.onChange} />
      </div>
    </fieldset>;
  },
});
