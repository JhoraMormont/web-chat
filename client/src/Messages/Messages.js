import React from 'react';
import './Messages.css';

export default class Messages extends React.Component {
  render() {
    const { messages } = this.props;

    return (
      <ul id="messages" className="Messages">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    );
  }
}
