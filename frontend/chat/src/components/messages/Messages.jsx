import React from 'react'
import Text from './Text'
import "./messagestyle.css"
import useGetMessages from '../../hooks/useGetMessages'
import { text } from 'express'
const Messages = () => {
    const {messages,loading} = useGetMessages();
    console.log("messages" , messages)
    return (
        <>
            <div className="message-text">
                {!loading && messages.length > 0 && messages.map((text) => (
                    <Text key={text._id} message={text}/>
                ))}
                {loading && messages.length === 0 && (
                    <p>Send a message to start the conversation.</p>
                )}
            </div>
        </>
    )
}

export default Messages