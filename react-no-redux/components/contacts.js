import React from 'react';

export default React.createClass({
  render() {
    return this.props.children || <section>Contacts list</section>;
  },
});
