import React, { Component } from 'react';
import ChatWindow from './ChatWindow'

class ChatContainer extends Component {
  
  state = {
     users: [{ username: 'Amy' }, { username: 'John' }],
     messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addMessage = (textMessage, senderUserName) => {
    this.setState((prevState) => ({
    	messages: [...prevState.messages, {username: senderUserName, text: textMessage}]
    }));
  }

  render() {
    return (
        <div className="container">
			<ChatWindow sender={this.state.users[0]} messages={this.state.messages} onSendMessage={this.addMessage}/>
			<ChatWindow sender={this.state.users[1]} messages={this.state.messages} onSendMessage={this.addMessage}/>
        </div>
    );
  }
}

export default ChatContainer;
