import React from 'react';
import { connect } from 'react-redux';

import { changeTwitterHandle } from '../actions/contact';

const TwitterInput = React.createClass({
  onChange(e) {
    this.props.changeTwitter(e.target.value);
  },

  render() {
    return <fieldset>
      <div className='input-group input-group-sm'>
        <span className='input-group-addon'>@</span>
        <input type='text' className='form-control' placeholder='Username'
               value={ this.props.username } onChange={this.onChange} />
      </div>
    </fieldset>;
  },
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeTwitter(handle) {
      dispatch(changeTwitterHandle(ownProps.contactId, handle));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TwitterInput);
