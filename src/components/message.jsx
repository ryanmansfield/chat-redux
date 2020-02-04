import React, { Component } from 'react';

const Message = (props) => {
  const { created_at, author, content} = props.message;
  const time = "12:30"
  return (
  <div className="message-container">
    <i className="author">
      <span>{author}</span>
      <small>{time}</small>
    </i>
      <p>{content}</p>
  </div>
  );
}

export default Message;
