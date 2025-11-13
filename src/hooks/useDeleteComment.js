import { useState } from "react";
import { deleteCommentById } from "../api/deleteComment.js";

export function useDeleteComment() {
	const [loadingCommentId, setLoadingCommentId] = useState(null);
	const [deleteError, setDeleteError] = useState(null);

	const deleteComment = async (commentId) => {
		try {
			setLoadingCommentId(commentId);
			setDeleteError(null);

			await deleteCommentById(commentId);

			return true;
		} catch (err) {
			setDeleteError(err.message || "Failed to delete comment");
			return false;
		} finally {
			setLoadingCommentId(null);
		}
	};

	return { deleteComment, loadingCommentId, deleteError };
}
