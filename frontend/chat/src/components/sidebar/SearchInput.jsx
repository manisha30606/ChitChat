import React, { useState } from 'react';
import "./sidebarstyle.css";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.userName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>
        <FaSearch className='icon' />
      </button>
    </form>
  );
}

export default SearchInput;
