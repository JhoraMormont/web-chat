import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', userName: '' };

    this.handleUserNameInputChange = this.handleUserNameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ password: '', userName: '' });
  }

  handleUserNameInputChange(event) {
    this.setState({ userName: event.target.value });
  }

  handlePasswordInputChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            User name
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleUserNameInputChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
