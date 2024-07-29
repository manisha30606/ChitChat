import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './routes/Home/home';
import Start from './routes/Start/start';
import Signup from './routes/SignUp/signUp';
import Login from './routes/Login/login';
import './App.css';
import { useAuthContext } from './context/AuthContext';
import { RiChatSmile3Line } from "react-icons/ri";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="App">

    {/* ================ ANIMATION =========================== */}
      <div className="box">
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
        <div><RiChatSmile3Line /></div>
      </div>
      <Routes>

        <Route path="/" element={authUser ? <Home /> : <Start />} />
        
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path="/home" element={authUser ? <Home /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
