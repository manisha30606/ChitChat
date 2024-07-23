import React from 'react';
import "./messagestyle.css";
import { IoPersonOutline } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from '../../zustand/useConversation';

const Text = ({ text }) => {
const [authUser] = useAuthContext();
console.log('authUser:', authUser);
  const { selectedConversation } = useConversation();

  console.log('selectedConversation:', selectedConversation);

  const fromMe = text.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat-me" : "chat-start";
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  return (
    <div className={`text-area ${chatClassName}`}>
      <div className="picture">
        {profilePic ? <img src={profilePic} alt="profile" /> : <IoPersonOutline />}
      </div>
      <div className="text-data">
        <h5>{text.message}</h5>
      </div>
    </div>
  );
};

export default Text;
