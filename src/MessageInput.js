import React, { Component } from 'react';
class MessageInput extends Component {

  isDisabled = event => {
    const value = this.state.message;
    return value === '';
  };

  state = {
    message: ''
  };

  addMessage = event => {
    event.preventDefault();

    this.props.addMessage(this.state.message)

    this.setState(() => ({
      message: '',
    }));
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      message: value,
    }));
  };

  render(){
    const { message } = this.state;
    return(
      <div>
        <form className="input-group" onSubmit={this.addMessage}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={this.handleChange}/>
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MessageInput
