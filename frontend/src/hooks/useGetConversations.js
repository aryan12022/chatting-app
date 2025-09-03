import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BASE_URL } from "../config";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				//const res = await fetch(`${BASE_URL}/users`);
				const res = await fetch(`${BASE_URL}/users`, {
          credentials: "include",
        });
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;