import React from 'react'
import { Link } from 'react-router-dom';
import "./start.css";
const start = () => {
  return (
    <>
    <section className="main">
      <div className="start-page">
        <div className="page-data">
          <h1>Welcome to <span>Chit Chat </span><br/> Connect, Share, and Enjoy!</h1>
          <p>Experience lively conversations with the Chit Chat app, where connecting with others is effortless. Engage in discussions on diverse topics, share insights, and build meaningful connections—all in one place.</p>
          <div className="btns">
           <Link to='/login'> <button className="btn"> Let's Start</button></Link> 
  
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default start