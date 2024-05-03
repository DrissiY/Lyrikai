import React, { useState } from 'react';
import "./ChatInput.scss";

const ChatInput = ({ onNewMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      const newMessage = { sender: 'me', message }; // Create a new message object
      onNewMessage(newMessage); // Add the new message to the chat history
      setMessage('');
      // Simulating automatic response
      setTimeout(() => {
        const autoResponse = { sender: 'bot', message: 'Sorry, we are not here right now.' };
        onNewMessage(autoResponse); // Send the automatic response to Chat component
      }, 1000); // Simulating delay
    }
  };

  return (
    <div className="write">
      <input
        placeholder="Ask lirikai for changes ..."
        type="text"
        value={message}
        onChange={handleMessageChange}
      />
      <button className="write-link send" onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default ChatInput;
