import React from 'react'
import { MdLogout } from "react-icons/md";
import "./sidebarstyle.css"
import useLogout from '../../hooks/useLogout';
const logoutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className="logout-button">
       {!loading ? (
         <MdLogout className='logout-btn' onClick= {logout} />
       ) : (
        <span className='loader'></span>
       )}
    </div>
  )
}

export default logoutButton