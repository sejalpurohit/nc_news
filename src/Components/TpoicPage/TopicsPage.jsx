import TopicCard from "../TopicCard/TopicCard";
import { useTopics } from "../../hooks/useGetAllTopics";
import "./TopicPage.css";

export default function TopicsPage() {
	const { topics, loadingTopics } = useTopics();

	if (loadingTopics) {
		return <p>Loading content...</p>;
	}

	return (
		<section className="topics-section">
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
