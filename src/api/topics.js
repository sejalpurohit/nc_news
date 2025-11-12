export const getTopics = async () => {
	const response = await fetch(
		"https://news-server-u1gw.onrender.com/api/topics"
	);

	if (!response.ok) {
		throw new Error("Failed to fetch articles");
	}

	return response.json();
};
