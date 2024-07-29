import React, { useState } from 'react';
import './sidebarstyle.css';
import SearchInput from './SearchInput';
import Conversation from './Conversations';
import LogoutButton from './logoutButton';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <section className='sidebar'>
        <SearchInput />
        <Conversation />
        <LogoutButton />
      </section>
    </>
  );
};

export default Sidebar;
