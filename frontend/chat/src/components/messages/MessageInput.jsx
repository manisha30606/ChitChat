import React, { useState } from 'react'
import "./messagestyle.css"
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
  const [message,setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <>
      <div className="message-input" onClick={handleSubmit}>
        <input type="text" placeholder='Send Message'  
        className='input-type'
        value={message}
        onChange={(e) => setMessage(e.target.value)}/>
        <button type='sumbit'>
         {loading ? <span>Loading......</span> : <IoSend className='send-icon'></IoSend>}
        </button>
      </div>
    </>
  )
}

export default MessageInput