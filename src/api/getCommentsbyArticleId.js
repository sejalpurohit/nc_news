export const getCommentsByArticleId = async (id) => {
	const res = await fetch(
		`https://news-server-u1gw.onrender.com/api/articles/${id}/comments`
	);
	if (!res.ok) {
		throw new Error("Failed to fetch article");
	}
	const data = await res.json();

	return data.comments;
};
