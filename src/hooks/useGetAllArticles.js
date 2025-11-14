import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../api/articles";

export const useArticles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	const [searchParams] = useSearchParams();

	const sort_by = searchParams.get("sort_by") || "created_at";
	const order = searchParams.get("order") || "desc";

	useEffect(() => {
		setLoading(true);
		getArticles({ sort_by, order })
			.then((data) => {
				setArticles(data.articles);
				setLoading(false);
			})
			.catch(() => {
				setArticles([]);
				setLoading(false);
			});
	}, [sort_by, order]);

	return { articles, loading };
};
