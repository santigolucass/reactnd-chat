import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat'
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: []
  };

  addMessage = (messageObj) => {
    this.setState(currState =>({
      messages: currState.messages.concat([ messageObj ])
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className='container'>
          {users.map((u) => (
            <Chat user={u} users={users} messages={this.state.messages} addMessage={this.addMessage}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
