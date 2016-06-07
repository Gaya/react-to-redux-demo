import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      on: this.props.on || false,
    };
  },

  onChange() {
    this.setState({
      on: !this.state.on,
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