import { useState, useEffect } from "react";
import { getArticleById } from "../api/articles";

export const useArticle = (id) => {
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getArticle = async () => {
			try {
				setLoading(true);
				const data = await getArticleById(id);

				setArticle(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		getArticle();
	}, [id]);

	return { article, loading, error };
};
