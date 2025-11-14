import SearchBar from "./HomePage/SearchBar.jsx";
import ArticleCard from "../Components/HomePage/ArticleCard/ArticleCard.jsx";
import Title from "./HomePage/Title.jsx";
import TopicsPage from "./TpoicPage/TopicsPage.jsx";
import SortControls from "./HomePage/Sort/Sort.jsx";
import { useState } from "react";

import { useArticles } from "../hooks/useGetAllArticles.js";
import "./Home.css";

function Home() {
	const { articles, loading } = useArticles();

	const [searchTerm, setSearchTerm] = useState("");

	const filteredArticles = articles.filter((article) => {
		if (!searchTerm) return true;

		const regex = new RegExp(`\\b${searchTerm}\\b`, "i");
		return regex.test(article.title);
	});

	return (
		<>
			<main className="content">
				<section className="left">
					<TopicsPage />
				</section>
				<section className="right">
					<div className="search-bar">
						<SearchBar setSearchTerm={setSearchTerm} />
						<SortControls />
					</div>
					<Title className="title" />
					<div className="articles-container">
						{filteredArticles.map((article) => {
							return (
								<ArticleCard
									key={article.article_id}
									article={article}
								/>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
}
export default Home;
