import { useUsers } from "../../hooks/useUsers";
import Loader from "../Loading/Loading.jsx";
import UserCard from "../UserCard/UserCard.jsx";

import "./User.css";

export default function User() {
	const { users, loadingUser, errorUser } = useUsers();
	if (!users) return;

	if (loadingUser) return <Loader />;
	if (errorUser) return <p style={{ color: "red" }}>Error: {errorUser}</p>;

	return (
		<>
			<h2 className="users-heading">Users</h2>
			<section className="user-section">
				{users.map((user) => (
					<UserCard
						key={user.id}
						user={user}
					/>
				))}
			</section>
		</>
	);
}
