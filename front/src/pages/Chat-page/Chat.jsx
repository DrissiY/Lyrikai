import React, { useState } from 'react';
import Sidebar from '../../components/Side-bar/Sidebar';
import ChatInput from '../../components/Chat-input/ChatInput';
import "./Chat.scss";
import ProgressBar from '../../components/Stepper/ProgessBar';
import ChatHistory from '../../components/chat-history/ChatHistory';

const Chat = () => {
  const [formFilled, setFormFilled] = useState(false);
  const [chat, setChat] = useState([]);

  // Function to handle form submission in the stepper
  const handleFormSubmit = () => {
    setFormFilled(true);
  };

  // Function to handle new messages from ChatInput
  const handleNewMessage = (newMessage) => {
    setChat([...chat, newMessage]);
  };

  return (
    <div className='chat'>
      <Sidebar />
      <div className="therest">
        {!formFilled && <ProgressBar onFormSubmit={handleFormSubmit} />}
        {formFilled && (
          <>
            <ChatHistory chat={chat} /> {/* Display chat history */}
            <ChatInput onNewMessage={handleNewMessage} /> {/* Pass callback function to update chat */}
          </>
        )}
      </div>
    </div>
  );
}

export default Chat;
