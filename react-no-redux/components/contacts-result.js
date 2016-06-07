import React from 'react';
import { Link } from 'react-router';

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
      <Link to={`/contact/${this.props.id}`}>
        { this.props.name }
      </Link>
    </li>;
  },
});