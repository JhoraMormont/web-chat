import React from 'react';
import Chat from './Chat';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Chat socket={this.props.socket} />
      </div>
    );
  }
}

export default App;
