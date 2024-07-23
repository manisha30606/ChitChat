import React from 'react'
import "./sidebarstyle.css"
import SearchInput from './SearchInput';
import Conversation from "./Conversations"
import LogoutButton from './logoutButton';

const sidebar = () => {
  return (
    <>
    <section className="sidebar">
        
        <SearchInput/>
         
        <Conversation/>

        <LogoutButton/>

       
    </section>

    </>
  )
}

export default sidebar