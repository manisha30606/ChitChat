import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const handleClick = () => {
    setSelectedConversation(conversation);
  };

  return (
    <div
      className={`conversation-data ${isSelected ? 'select-data' : ''}`}
      onClick={handleClick}
    >
      <div className="picture online">
        <img
          src={conversation.profilePic}
          alt={`${conversation.userName}'s Profile Picture`}
        />
      </div>
      <div className="name">
        <h5>{conversation.userName}</h5>
      </div>
      <div className="emoji">
        <p>{emoji}</p>
      </div>
    </div>
  );
};

export default Conversation;
