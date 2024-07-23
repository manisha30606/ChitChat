import React from 'react'
import "./messagestyle.css"
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useEffect } from 'react'
const NoChatSelected = () => {
  return (
    <div className="nochat">
      <h1>Start Chat</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, rerum.</p>
    </div>
  )
}

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
 
  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className="message-box">
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          {/* ==============Header================= */}
          <div className="header">
            <h6>To: <span>{selectedConversation.userName}</span></h6>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer;
