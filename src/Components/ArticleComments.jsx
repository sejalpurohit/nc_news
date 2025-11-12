import { useCommentOnArticle } from "../hooks/getCommentsbyArticleId";
function ArticleComments({ id }) {
	const { comment, loadingComments, errorComment } = useCommentOnArticle(id);

	if (loadingComments) return <p>Loading Comments...</p>;
	if (errorComment) return <p>Error: {error}</p>;
	if (!comment) return <p>Article not found</p>;

	console.log("comments in comments...", comment);
	return (
		<div className="comments-section">
			<h3>Comments</h3>
			{comment.map((eachComment) => (
				<div
					key={eachComment.comment_id}
					className="comment"
				>
					<h5>{eachComment.body}</h5>
				</div>
			))}
		</div>
	);
}

export default ArticleComments;
