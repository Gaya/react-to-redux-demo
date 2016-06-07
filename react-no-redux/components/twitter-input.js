import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      username: this.props.username || null,
    };
  },

  onChange(e) {
    this.setState({
      username: e.target.value,
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
