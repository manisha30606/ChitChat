import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/sidebar";
import MessageContainer from "../../components/messages/MessageContainer.jsx";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importing icons
import "./home.css";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <section className="home">
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
        <Sidebar />
        <div className="toggle-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </div>
      </div>
      <MessageContainer className="message-container"/>
    </section>
  );
};

export default Home;
