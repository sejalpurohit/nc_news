import SearchBar from "../Components/HomePage/SeacrhBar.jsx";
import ArticleCard from "../Components/HomePage/ArticleCard.jsx";
import Title from "./HomePage/Title.jsx";

import { useArticles } from "../hooks/useGetAllArticles.js";

function Home() {
	const { articles, loading } = useArticles();

	return (
		<section>
			<SearchBar />
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
	);
}
export default Home;
