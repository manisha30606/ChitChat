import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './routes/Home/home';
import Start from './routes/Start/start';
import Signup from './routes/SignUp/signUp';
import Login from './routes/Login/login';
import Test from './routes/Test';
import './App.css';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="App">
      <Routes>
   
        <Route path="/" element={authUser ? <Home /> : <Start />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path="/home" element={authUser ? <Home /> : <Navigate to="/login" />} />

        {/* <Route path="/" element={ <Start />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/home" element={<Home/>} /> */}

     {/* <Route path='/test' element={<Test/>}/> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
