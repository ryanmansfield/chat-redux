import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends Component {
    render() {
    return (
      <h1>TODO Channel List</h1>
      // <div className="channels-container">
        // <span>Redux Chat</span>
        // <ul>
          // {this.props.channels.map(channel) =>
            // return channel
          // }
        // </ul>
      // </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
  };
}

export default connect(mapStateToProps)(MessageList);
