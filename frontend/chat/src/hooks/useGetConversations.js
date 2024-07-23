import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext'; // Adjust the path as necessary

const useGetConversations = () => {
    const { authUser } = useAuthContext();
    const token = authUser?.token;
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            console.log('Fetching conversations with token:', token);

            try {
                const res = await fetch('http://localhost:5000/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    credentials: 'include', // Include cookies in the request
                });
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                if (Array.isArray(data)) {
                    setConversation(data);
                } else {
                    throw new Error('Data fetched is not an array');
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            getConversations();
        } else {
           
            console.log('Token not provided');
        }
    }, [token]
);

    return { loading, conversation };
};

export default useGetConversations;
