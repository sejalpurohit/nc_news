import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article }) {
	if (!article) return;

	const {
		article_id,
		article_img_url,
		author,
		title,
		topic,
		comment_count,
		votes,
		created_at,
	} = article;

	const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<section className="article-card">
			<img
				className="article-card-img"
				src={article_img_url}
				alt="image"
			/>
			<div>
				<Link
					className="article-card-title"
					to={`/articles/${article_id}`}
				>
					{title}
				</Link>
				<h4 className="article-card-topic">{topic}</h4>
				<h4 className="article-card-author"> {author}</h4>
			</div>
			<div className="article-card-stats">
				<h5>💬Comment: {comment_count}</h5>
				<h5>👍Votes: {votes}</h5>
			</div>
			<p className="article-date">
				<strong>Posted on: </strong>
				{formattedDate}
			</p>
		</section>
	);
}

export default ArticleCard;
