export async function getUsers() {
	const response = await fetch(
		"https://news-server-u1gw.onrender.com/api/users"
	);

	if (!response.ok) {
		throw new Error("Failed to fetch users");
	}

	return response.json();
}
