import React, { useState } from 'react';
import "./ChatInput.scss";


const ChatInput = () => {
  const [message, setMessage] = useState('');


  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      const newChat = [...chat, { sender: 'me', message }];
      setChat(newChat);
      setMessage('');
      // Simulating automatic response
      setTimeout(() => {
        const autoResponse = { sender: 'bot', message: 'Sorry, we are not here right now.' };
        setChat([...newChat, autoResponse]);
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
      <a className="write-link send" onClick={handleSubmit}></a>
    </div>
  );
};

export default ChatInput;
