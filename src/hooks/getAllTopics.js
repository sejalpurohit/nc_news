import { useEffect, useState } from "react";
import { getTopics } from "../api/topics";

export const useTopics = () => {
	const [topics, setTopics] = useState([]);
	const [loadingTopics, setLoadingTopics] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadTopics() {
			try {
				const data = await getTopics();
				setTopics(data.topics);
			} catch (err) {
				console.error("Error fetching topics:", err);
				setError(err);
				setTopics([]);
			} finally {
				setLoadingTopics(false);
			}
		}

		loadTopics();
	}, []);

	return { topics, loadingTopics, error }; // ✅ now returns all useful info
};
