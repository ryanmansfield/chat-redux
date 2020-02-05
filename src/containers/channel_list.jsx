import React, { Component } from 'react';
import { connect } from 'react-redux';


import Message from '../components/message';

class MessageList extends Component {
    render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {
            this.props.channels.map((channel) => {
              return (
                <li> #{channel} </li>
              );
            })
          }
        </ul>
      </div>

    );
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
  };
}

export default connect(mapStateToProps)(MessageList);

