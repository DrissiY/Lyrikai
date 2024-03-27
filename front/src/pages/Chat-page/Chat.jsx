import React from 'react'
import Sidebar from '../../components/Side-bar/Sidebar'
import ChatInput from '../../components/Chat-input/ChatInput'
import "./Chat.scss"
import ProgressBar from '../../components/Stepper/ProgessBar'


const Chat = () => {
  return (
    <div className='chat'>
      <Sidebar></Sidebar>
      <div className="therest">
      <ProgressBar></ProgressBar>
      <ChatInput></ChatInput>
      </div>
      </div>
  )
}

export default Chat