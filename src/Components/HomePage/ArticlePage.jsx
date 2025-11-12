import { useParams } from "react-router-dom";
import { useArticle } from "../../hooks/articlebyId.js";
import ArticleComments from "../ArticleComments.jsx";

function ArticlePage() {
	const { id } = useParams();
	const { article, loading, error } = useArticle(id);

	if (loading) return <p>Loading article...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!article) return <p>Article not found</p>;

	return (
		<div className="article-page">
			<h1>{article.title}</h1>
			<h3>{article.topic}</h3>
			<h4>By {article.author}</h4>
			<img
				src={article.article_img_url}
				alt={article.title}
			/>
			<div className="stats-row">
				<h5>💬 Comment: {article.comment_count}</h5>
				<h5>👍 Votes: {article.votes}</h5>
			</div>
			<p>{article.body}</p>
			<ArticleComments id={id} />
		</div>
	);
}

export default ArticlePage;
