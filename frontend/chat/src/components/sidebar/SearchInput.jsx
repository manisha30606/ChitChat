import React from 'react'
import "./sidebarstyle.css"
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <>
    
    <div className="search">
            <input type="text"  placeholder='Search'/>
            <button type='sumbit'>
            <FaSearch className='icon' />
            </button>
        </div>
    </>
  )
}

export default SearchInput