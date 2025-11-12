import { Link } from "react-router-dom";

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
	} = article;

	return (
		<section className="card">
			<img
				className="card-image"
				src={article_img_url}
				alt="image"
			/>
			<div className="card-content">
				<Link
					className="card-title"
					to={`/articles/${article_id}`} // navigate to article page
				>
					{title}
				</Link>
				<h4 className="card-description ">{topic}</h4>
				<h4 className="card-title"> {author}</h4>
			</div>
			<div className="stats-row">
				<h5>💬Comment: {comment_count}</h5>
				<h5>👍Votes: {votes}</h5>
			</div>
		</section>
	);
}

export default ArticleCard;
