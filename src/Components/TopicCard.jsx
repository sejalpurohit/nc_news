function TopicCard({ topic }) {
	if (!topic) return;

	const { topic_id, slug, description, img_url } = topic;

	return (
		<div
			key={topic_id}
			className="topic-card"
		>
			{img_url && (
				<img
					src={img_url}
					alt={slug || "topic image"}
					className="topic-img"
				/>
			)}
			<div className="topic-content">
				<h4>{slug}</h4>
				<h5>{description}</h5>
			</div>
		</div>
	);
}

export default TopicCard;
