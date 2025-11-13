import { useEffect, useState } from "react";
import { getArticles } from "../api/articles";

export const useArticles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles()
			.then((data) => {
				setArticles(data.articles);
				setLoading(false);
			})
			.catch(() => {
				setArticles([]);
				setLoading(false);
			});
	}, []);

	return { articles, loading };
};
