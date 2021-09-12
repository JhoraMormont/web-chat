import React from 'react';
import { io } from 'socket.io-client';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      chatMessages: []
    };

    this.socket = io('localhost:4000');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.socket.on('message', message => {
      this.setState({
        chatMessages: [...this.state.chatMessages, message]
      });
    });
  }

  componentWillUnmount() {
    // Removes all listeners for the message event
    this.socket.removeAllListeners('message');
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input) {
      this.socket.emit('message', this.state.input);
      this.setState({
        input: ''
      });
    }
  }

  render() {
    const { chatMessages } = this.state;
    return (
      <div className="App">
        <ul id="messages" className="Messages">
          {chatMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form id="form" className="ChatForm" onSubmit={this.handleSubmit}>
          <input
            id="input"
            type="text"
            className="ChatForm-input"
            autoComplete="off"
            onChange={this.handleInputChange}
            value={this.state.input}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
