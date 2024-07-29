import React from 'react';
import "./messagestyle.css";
import { IoPersonOutline } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from '../../zustand/useConversation';
import { extractTime } from "../../utils/extractTime";

const Text = ({ text }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  if (!authUser || !text) {
    // If authUser or text is not defined, return null or a fallback UI
    return null;
  }

  const fromMe = text.senderId === authUser._id;
  const formattedTime = extractTime(text.createdAt);
  const chatClassName = fromMe ? "chat-me" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  const shakeClass = text.shouldShake ? "shake" : "";

  return (
    <div className={`chat-message ${chatClassName}`}>
      <div className='text-area message-content'>
        <div className="picture">
          {profilePic ? <img src={profilePic} alt="profile" /> : <IoPersonOutline />}
        </div>
        <div className="text-data">
          <h5 className={`${shakeClass}`}>{text.message}</h5>
          <p>{formattedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Text;
