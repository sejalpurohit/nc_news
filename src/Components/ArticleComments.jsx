import { useCommentOnArticle } from "../hooks/useGetCommentsbyArticleId";
import { usePostComment } from "../hooks/usePostComment";
import { useState } from "react";
import { useDeleteComment } from "../hooks/useDeleteComment";

function ArticleComments({ id, onCommentAdded, onCommentDeleted }) {
	const { comment, loadingComments, errorComment, setComments } =
		useCommentOnArticle(id);

	const { submitComment, loadingPostComment, errorPostComment } =
		usePostComment();

	const {
		deleteComment,
		loadingCommentId: error,
		deleteError,
	} = useDeleteComment();

	const [text, setText] = useState("");

	if (loadingComments) return <p>Loading Comments...</p>;
	if (errorComment) return <p>Error: {error}</p>;
	if (!comment) return <p>Article not found</p>;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (text.trim().length === 0) return;

		const optimisticComment = {
			comment_id: Date.now(),
			body: text,
			votes: 0,
			created_at: new Date().toISOString(),
			author: "butter_bridge",
		};

		setComments((curr) => [optimisticComment, ...curr]);

		onCommentAdded();

		const posted = await submitComment(id, "jessjelly", text);

		if (!posted) {
			setComments((curr) => curr.filter((c) => c !== optimisticComment));
		} else {
			setComments((curr) =>
				curr.map((c) =>
					c.comment_id === optimisticComment.comment_id ? posted : c
				)
			);
		}

		setText("");
	};

	const handleDelete = async (commentId) => {
		const oldComments = comment;

		setComments((curr) => curr.filter((c) => c.comment_id !== commentId));

		if (onCommentDeleted) onCommentDeleted();

		const success = await deleteComment(commentId);

		if (!success) {
			setComments(oldComments);

			if (onCommentDeleted) {
				onCommentDeleted(-1);
			}
		}
	};

	return (
		<div className="comments-section">
			<h3>Comments</h3>

			<form
				onSubmit={handleSubmit}
				className="comment-form"
			>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Write your comment..."
					required
				/>

				<button disabled={loadingPostComment}>
					{loadingPostComment ? "Posting..." : "Post Comment"}
				</button>
			</form>

			{errorPostComment && <p style={{ color: "red" }}>{errorComment}</p>}

			{comment.map((eachComment) => (
				<div
					key={eachComment.comment_id}
					className="comment"
				>
					<h5>{eachComment.body}</h5>
					<h6>👍 {eachComment.votes}👎</h6>
					<h6>{eachComment.created_at}</h6>
					<h6>{eachComment.author}</h6>

					{/* {eachComment.author === loggedInUser && ( */}
					<button
						onClick={() => handleDelete(eachComment.comment_id)}
						className="delete-btn"
					>
						{/* {loadingId === eachComment.comment_id ? "Deleting..." : "Delete"} */}
						delete
					</button>
				</div>
			))}
		</div>
	);
}

export default ArticleComments;
