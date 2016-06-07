import React from 'react';
import { connect } from 'react-redux';

import { favouriteContact } from '../actions/contact';

const FavouriteSwitch = React.createClass({
  onChange() {
    var changeTo = !this.props.on;

    this.props.changeFavourite(this.props.contactId, changeTo);
  },

  classNames(isActive) {
    return 'btn btn-default btn-small' + (isActive ? ' btn-success' : '');
  },

  render() {
    return <button type='button' onClick={this.onChange} className={this.classNames(this.props.on)}
                   style={{ marginLeft: '20px', }}>
        <span className='glyphicon glyphicon-star' aria-hidden='true'></span>
      </button>;
  },
});

function mapDispatchToProps(dispatch) {
  return {
    changeFavourite(id, isActive) {
      dispatch(favouriteContact(id, isActive));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(FavouriteSwitch);
