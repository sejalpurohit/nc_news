export const getArticles = async () => {
	const response = await fetch(
		"https://news-server-u1gw.onrender.com/api/articles"
	);

	if (!response.ok) {
		throw new Error("Failed to fetch articles");
	}

	return response.json();
};

export const getArticleById = async (id) => {
	const res = await fetch(
		`https://news-server-u1gw.onrender.com/api/articles/${id}`
	);
	if (!res.ok) {
		throw new Error("Failed to fetch article");
	}
	const data = await res.json();
	return data.article;
};
