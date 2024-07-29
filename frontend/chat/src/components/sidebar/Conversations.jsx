import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import {getRandomEmojis } from '../../utils/emojis'; // Ensure this is correctly named

const Conversations = () => {
    const { loading, conversations } = useGetConversations(); // Correct state name

    return (
        <div className="conversation-list">
            {conversations.length > 0 ? (
                conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmojis()} // Ensure this is correctly named
                        lastIdx={idx === conversations.length - 1} // Correct length
                    />
                ))
            ) : (
                !loading && <span className='no'>No conversations available.❌</span>
            )}
            {loading && <span className='loader'></span>}
        </div>
    );
};

export default Conversations;
