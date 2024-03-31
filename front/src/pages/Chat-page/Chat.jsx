import React, { useState } from 'react';
import Sidebar from '../../components/Side-bar/Sidebar'
import ChatInput from '../../components/Chat-input/ChatInput'
import "./Chat.scss"
import ProgressBar from '../../components/Stepper/ProgessBar'
import ChatHistory from '../../components/chat-history/ChatHistory';



const Chat = () => {
  const [formFilled, setFormFilled] = useState(false);
  const [chat, setChat] = useState([]);

  // Function to handle form submission in the stepper
  const handleFormSubmit = () => {
    // Assuming you have a way to determine if the form is filled, set formFilled to true
    setFormFilled(true);
  };

  return (
    <div className='chat'>
      <Sidebar></Sidebar>
      <div className="therest">
      {!formFilled && <ProgressBar onFormSubmit={handleFormSubmit} />}
        {formFilled && (
          <>
            <ChatInput chat={chat} onNewMessage={setChat} /> {/* Pass chat and function to update */}
            <ChatHistory chat={chat} /> {/* Display chat history */}
          </>
        )}
      </div>
      </div>
  )
}

export default Chat