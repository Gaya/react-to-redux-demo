import React from 'react';

export default React.createClass({
  favourite(isFavourite) {
    if (!isFavourite) {
      return null;
    }

    return <span className='badge'>★</span>;
  },

  render() {
    return <li className='list-group-item'>
      { this.favourite(this.props.favourite) }
      <strong>{ this.props.name }</strong>
    </li>;
  },
});