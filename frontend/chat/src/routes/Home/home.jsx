import React from 'react'
import Sidebar from "../../components/sidebar/sidebar"
import MessageContainer from "../../components/messages/MessageContainer.jsx.jsx"
import "./home.css"
const home = () => {
  return (
    <>
    <section className="home">
       <Sidebar className="left"/>
       <MessageContainer className ="right"/>
    </section>
    </>
  )
}

export default home