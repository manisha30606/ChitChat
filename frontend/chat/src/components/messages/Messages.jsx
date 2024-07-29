import React, { useEffect ,useRef} from 'react';
import "./messagestyle.css";
import useGetMessages from '../../hooks/useGetMessages';
import Text from './Text';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

    return (
        <>
            <div className="message-text">
                {!loading && messages.length > 0 && messages.map((text) => (
                    <div key={text._id} ref = {lastMessageRef} >
                        <Text text={text} />

                    </div>
                    
                ))}
                {loading && messages.length === 0 && (
                    <p className='no'>Send a message to start the conversation.</p>
           
                )}
            </div>
        </>
    );
};

export default Messages;
