import React from 'react';
import Messages from '../Messages';
import './Chat.css';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      chatMessages: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('message', message => {
      this.setState({
        chatMessages: [...this.state.chatMessages, message]
      });
    });
  }

  componentWillUnmount() {
    // Removes all listeners for the message event
    this.props.socket.removeAllListeners('message');
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input) {
      this.props.socket.emit('message', this.state.input);
      this.setState({
        input: ''
      });
    }
  }

  render() {
    const { chatMessages } = this.state;

    return (
      <div>
        <Messages messages={chatMessages} />
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
