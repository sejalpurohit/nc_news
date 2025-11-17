import "./UserCard.css";

export default function UserCard({ user }) {
	if (!user) return;
	return (
		<div className="user-card">
			<img
				src={user.avatar_url}
				alt={`${user.username}'s avatar`}
				className="user-img"
			/>

			<h3>
				<strong>Full Name: </strong>
				{user.name}
			</h3>
			<h3>
				<strong>Username: </strong>
				{user.username}
			</h3>
		</div>
	);
}
