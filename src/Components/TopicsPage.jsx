import TopicCard from "../Components/TopicCard";
import { useTopics } from "../hooks/useGetAllTopics";

export default function TopicsPage() {
	const { topics, loadingTopics } = useTopics();

	if (loadingTopics) {
		return <p>Loading content...</p>;
	}

	return (
		<section className="topics-page">
			<h1 className="topics-title">All Topics</h1>
			<div className="topics-grid">
				{topics.map((topic) => (
					<TopicCard
						key={topic.topic_id}
						topic={topic}
					/>
				))}
			</div>
		</section>
	);
}
