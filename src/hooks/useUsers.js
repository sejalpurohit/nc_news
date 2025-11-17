import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

export function useUsers() {
	const [users, setUsers] = useState([]);
	const [loadingUser, setLoading] = useState(true);
	const [errorUser, setError] = useState(null);

	useEffect(() => {
		getUsers()
			.then((data) => {
				setUsers(data.users);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	return { users, loadingUser, errorUser };
}
