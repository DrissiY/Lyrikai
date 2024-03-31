
import React from 'react';

const ChatHistory = ({ chat }) => {
  return (
    <div className="chat-history">
      {chat.map((item, index) => (
        <div key={index} className={`message ${item.sender === 'me' ? 'sent' : 'received'}`}>
          <span>{item.sender}</span>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
