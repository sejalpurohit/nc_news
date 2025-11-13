import { useState } from "react";
import { updateArticleVotes } from "../api/updateVote.js";

export function useUpdateArticleVotes() {
	const [loadingVotes, setLoading] = useState(false);
	const [errorVotes, setError] = useState(null);

	const updateVotes = async (articleId, inc) => {
		try {
			setLoading(true);
			setError(null);

			const updatedArticle = await updateArticleVotes(articleId, inc);

			return updatedArticle;
		} catch (err) {
			setError(err.message);
			return null;
		} finally {
			setLoading(false);
		}
	};

	return { updateVotes, loadingVotes, errorVotes };
}
