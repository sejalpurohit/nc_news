import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<>
			<header className="header">
				Northcoders News
				<nav>
					<Link to="/">Home</Link>
					<Link to={"/users"}>Users</Link>
				</nav>
			</header>
		</>
	);
}

export default Header;
