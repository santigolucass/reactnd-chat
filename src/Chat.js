import React, { Component } from 'react'
import MessageInput from './MessageInput'

class Chat extends Component {

  addMessage = message => {
    var messageObj = {
      text: message,
      username: this.props.user.username
    }

    this.props.addMessage(messageObj);
  };

  render(){
    const {user, users, messages} = this.props;
    return(
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === user.username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>

        <MessageInput addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default Chat
