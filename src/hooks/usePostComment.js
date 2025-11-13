import { useState } from "react";
import { postComment } from "../api/postComment";

export function usePostComment() {
	const [loadingPostComment, setLoadingComment] = useState(false);
	const [errorPostComment, setErrorComment] = useState(null);

	const submitComment = async (articleId, username, body) => {
		try {
			setLoadingComment(true);
			setErrorComment(null);

			const newComment = await postComment(articleId, username, body);
			return newComment;
		} catch (err) {
			setErrorComment(err.message || "Failed to post comment");
			return null;
		} finally {
			setLoadingComment(false);
		}
	};

	return { submitComment, loadingPostComment, errorPostComment };
}
