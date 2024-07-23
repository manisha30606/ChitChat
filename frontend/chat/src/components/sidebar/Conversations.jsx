import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmojis } from '../../utils/emojis';

const Conversations = () => {
    const { loading, conversation } = useGetConversations();

    return (
        <div className="conversation-list">
            {Array.isArray(conversation) ? (
                conversation.map((conv, idx) => (
                    <Conversation 
                        key={conv._id}
                        conversation={conv}
                        emoji={getRandomEmojis()}
                        lastIdx={idx === conversation.length - 1}
                    />
                ))
            ) : (
                <span>No conversations available</span>
            )}
            {loading && <span>Loading........</span>}
        </div>
    );
};

export default Conversations;
