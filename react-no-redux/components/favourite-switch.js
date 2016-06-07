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

  render() {
    return <fieldset>
      <label onClick={this.onChange}>
        favourite
      </label>
      <input type='checkbox' onChange={this.onChange} checked={ this.state.on } />
    </fieldset>;
  },
});