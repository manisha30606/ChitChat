import React from 'react'
import "./messagestyle.css"
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { IoLogoWechat } from "react-icons/io5";
const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="nochat">
      <h1>Start Chat</h1>
      <p> Hi <span>{authUser.userName}</span> ✨ Let’s Chit Chat! Your Thoughts Are Just a Message Away! ✨</p>
      <IoLogoWechat className='nochat-icon'/>
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
