export function updateArticleVotes(articleId, inc) {
	console.log("in api ..", articleId, inc);
	return fetch(
		`https://news-server-u1gw.onrender.com/api/articles/${articleId}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ inc_votes: inc }),
		}
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to update votes");
			}
			return res.json();
		})
		.then((data) => data.article);
}
