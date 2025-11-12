import { getCommentsByArticleId } from "../api/getCommentsbyArticleId";

import { useState, useEffect } from "react";

export const useCommentOnArticle = (id) => {
	const [comment, setComments] = useState(null);
	const [error, setError] = useState(null);

	const [loadingComment, setLoadingComment] = useState(true);

	useEffect(() => {
		const getCommentsByArticle = async () => {
			try {
				setLoadingComment(true);
				const data = await getCommentsByArticleId(id);

				setComments(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoadingComment(false);
			}
		};
		getCommentsByArticle();
	}, [id]);

	console.log(" in hook comments....", comment);
	return { comment, loadingComment, error };
};
