import React from 'react';

export default React.createClass({
  render() {
    return <div className='progress'>
      <div className='progress-bar progress-bar-info progress-bar-striped active'
           style={{ width: '100%', }}>
        { this.props.children || '' }
      </div>
    </div>;
  },
});