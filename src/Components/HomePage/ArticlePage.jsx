import { useParams } from "react-router-dom";
import { useState } from "react";
import { useArticle } from "../../hooks/useArticlebyId.js";
import ArticleComments from "../ArticleComments.jsx";
import { useUpdateArticleVotes } from "../../hooks/useUpdateVote.js";

function ArticlePage() {
	const { id } = useParams();
	const { article, loading, error, setArticle } = useArticle(id);

	const {
		updateVotes,
		loadingVotes: voting,
		errorVotes: voteError,
	} = useUpdateArticleVotes();

	const [localVotes, setLocalVotes] = useState(null);

	if (loading) return <p>Loading article...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!article) return <p>Article not found</p>;

	const displayedVotes = localVotes ?? article.votes;

	const handleVote = async (inc) => {
		setLocalVotes(displayedVotes + inc);

		const updated = await updateVotes(id, inc);

		if (!updated) {
			setLocalVotes(displayedVotes);
		} else {
			setLocalVotes(updated.votes);
		}
	};

	return (
		<div className="article-page">
			<h1>{article.title}</h1>

			<img
				src={article.article_img_url}
				alt={article.title}
			/>
			<p>{article.body}</p>
			<h3>{article.topic}</h3>
			<h4>By {article.author}</h4>
			<div className="stats-row">
				<h5>💬 Comment: {article.comment_count}</h5>
				<h5>👍 Votes: {displayedVotes}</h5>
			</div>

			<div style={{ marginTop: "10px" }}>
				<button
					disabled={voting}
					onClick={() => handleVote(1)}
				>
					👍 Upvote
				</button>

				<button
					disabled={voting}
					onClick={() => handleVote(-1)}
				>
					👎 Downvote
				</button>

				{voting && <p>Updating vote...</p>}
				{voteError && <p style={{ color: "red" }}>Failed to update vote</p>}
			</div>

			<ArticleComments
				id={id}
				onCommentAdded={() => {
					setArticle((a) => ({ ...a, comment_count: a.comment_count + 1 }));
				}}
				onCommentDeleted={() =>
					setArticle((a) => ({ ...a, comment_count: a.comment_count - 1 }))
				}
			/>
		</div>
	);
}

export default ArticlePage;
