import React from 'react';
import { io } from 'socket.io-client';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.socket = io('localhost:4000');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.message);
    if (this.state.message) {
      this.socket.emit('message', this.state.message);
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <ul id="messages" className="Messages"></ul>
        <form id="form" className="ChatForm" onSubmit={this.handleSubmit}>
          <input
            id="input"
            type="text"
            className="ChatForm-input"
            autoComplete="off"
            onChange={this.handleInputChange}
            value={this.state.message}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
