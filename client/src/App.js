import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/chat">
              <Chat socket={this.props.socket} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
