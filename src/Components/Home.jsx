import SearchBar from "./HomePage/SearchBar.jsx";
import ArticleCard from "../Components/HomePage/ArticleCard/ArticleCard.jsx";
import Title from "./HomePage/Title.jsx";
import TopicsPage from "./TpoicPage/TopicsPage.jsx";

import { useArticles } from "../hooks/useGetAllArticles.js";
import "./Home.css";

function Home() {
	const { articles, loading } = useArticles();

	return (
		<>
			<section className="home-layout">
				<div className="search-bar">
					<SearchBar />
				</div>

				<Title className="title" />
				<div className="card-container">
					{articles.map((article) => {
						return (
							<ArticleCard
								key={article.article_id}
								article={article}
							/>
						);
					})}
				</div>
			</section>
			<section>
				<TopicsPage />
			</section>
		</>
	);
}
export default Home;
