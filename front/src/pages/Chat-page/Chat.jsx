import React from 'react'
import Sidebar from '../../components/Side-bar/Sidebar'
import ChatInput from '../../components/Chat-input/ChatInput'
import "./Chat.scss"


const Chat = () => {
  return (
    <div className='chat'>
      <Sidebar></Sidebar>
      <div>
      <ChatInput></ChatInput>
      </div>
      </div>
  )
}

export default Chat