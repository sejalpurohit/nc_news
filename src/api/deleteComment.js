export function deleteCommentById(commentId) {
	console.log("in comment api ", commentId);
	return fetch(
		`https://news-server-u1gw.onrender.com/api/comments/${commentId}`,
		{
			method: "DELETE",
		}
	).then((res) => {
		if (!res.ok) {
			throw new Error("Failed to delete comment");
		}
		return true;
	});
}
