import React, { Component } from 'react';

class ChatWindow extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    newMessage: ''
  }

  updateNewMessage = (text) => {
    this.setState(() => ({
      newMessage: text
    }))
  }
  
  isDisabled = () => {
   return this.state.newMessage.length === 0;
  };

sendMessage = (event) => {
  event.preventDefault()
  this.props.onSendMessage(this.state.newMessage, this.props.sender.username)
}

  render() {
    return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.sender.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.sender.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={(event) => this.updateNewMessage(event.target.value)}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.sendMessage}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

    );
  }
}

export default ChatWindow;
