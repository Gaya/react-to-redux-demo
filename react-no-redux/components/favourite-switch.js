import React from 'react';

import Events from '../core/events';

export default React.createClass({
  getInitialState() {
    return {
      on: this.props.on || false,
    };
  },

  onChange() {
    var changeTo = !this.state.on;

    Events.emit('changeFavourite', changeTo, this.props.contactId);

    this.setState({
      on: changeTo,
    });
  },

  classNames(isActive) {
    return 'btn btn-default btn-small' + (isActive ? ' btn-success' : '');
  },

  render() {
    return <button type='button' onClick={this.onChange} className={this.classNames(this.state.on)}
                   style={{ marginLeft: '20px', }}>
        <span className='glyphicon glyphicon-star' aria-hidden='true'></span>
      </button>;
  },
});
