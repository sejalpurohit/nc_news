export function postComment(articleId, username, body) {
	console.log("in api..", articleId, username, body);
	return fetch(
		`https://news-server-u1gw.onrender.com/api/articles/${articleId}/comments`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, body }),
		}
	)
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to post comment");
			}
			return res.json();
		})
		.then((data) => data.comment);
}
