import React, { Component }from 'react';
import './chatpanel.css'
import robotIcon from './robot-icon.png'; 
import axios from "axios";

class Chatpanel extends Component {
  constructor(props) {
    super(props);
    // Initialize state for messages and user input
    this.state = {
      messages: [],
      userInput: '',
      isChatOpen: false, // Initially, the chat panel is closed
    };
  }

  toggleChat = () => {
    this.setState((prevState) => ({
      isChatOpen: !prevState.isChatOpen,
    }));
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      this.sendMessage();
    }
  };
  sendMessage = async () => {
    const { userInput, messages } = this.state;

    if (userInput.trim() === '') {
      return;
    }

    const { data } = await axios.post("http://127.0.0.1:5000/get_response", { input: userInput })
    console.log(data)

    // Add the user's message to the messages array
    this.setState({
      messages: [...messages, { text: userInput, sender: 'user' }, { text: data[0], sender: 'chatbot' }],
      userInput: '',
    });
  };

  render() {
    return (
      <div className={chatbot ${this.state.isChatOpen ? 'open' : ''}}>
        <div className="chatbot-icon" onClick={this.toggleChat}>
          {/* Use the imported chatbot icon image */}
          <img src={robotIcon} alt="Chatbot Icon" />
        </div>
        {/* Conditionally render the chatbot panel */}
        {this.state.isChatOpen && (
          <div className="chatbot-panel">
            <div className="chatbot-header">
              <span>Chatbot</span>
              <button onClick={this.toggleChat}>Close</button>
            </div>
            <div className="chatbot-messages">
              {this.state.messages.map((message, index) => (
                <div key={index} className={message message-${message.sender}}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
              
                type="text"
                placeholder="Type your message..."
                value={this.state.userInput}
                onChange={(e) => this.setState({ userInput: e.target.value })}
                onKeyDown={this.handleKeyDown}
              />
              <button onClick={this.sendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Chatpanel;