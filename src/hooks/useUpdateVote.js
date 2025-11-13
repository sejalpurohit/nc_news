import { useState } from "react";
import { updateArticleVotes } from "../api/updateVote.js";

export function useUpdateArticleVotes() {
	const [loadingVotes, setLoading] = useState(false);
	const [errorVotes, setError] = useState(null);

	const updateVotes = async (articleId, inc) => {
		console.log("id and vote in hook ", articleId, inc);
		try {
			setLoading(true);
			setError(null);

			const updatedArticle = await updateArticleVotes(articleId, inc);

			console.log("ap call..", updatedArticle);
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
