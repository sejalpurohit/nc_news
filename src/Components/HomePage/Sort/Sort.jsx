import { useSearchParams } from "react-router-dom";
import "./Sort.css";

export default function SortControls() {
	const [searchParams, setSearchParams] = useSearchParams();

	const sort_by = searchParams.get("sort_by") || "created_at";
	const order = searchParams.get("order") || "desc";

	const updateParam = (key, value) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set(key, value);
		setSearchParams(newParams);
	};

	return (
		<div className="sort-controls">
			<label>SortBy: </label>
			<select
				value={sort_by}
				onChange={(e) => updateParam("sort_by", e.target.value)}
			>
				<option value="title">Title</option>
				<option value="comment_count">Comment Count</option>
				<option value="votes">Votes</option>
				<option value="created_at">Date</option>
				<option value="comment_count">Comment Count</option>
				<option value="topic">Topic</option>
			</select>

			<label>Order: </label>
			<select
				value={order}
				onChange={(e) => updateParam("order", e.target.value)}
			>
				<option value="desc">Descending</option>
				<option value="asc">Ascending</option>
			</select>
		</div>
	);
}
