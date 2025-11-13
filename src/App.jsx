import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import ArticlePage from "./Components/HomePage/ArticlePage.jsx";
import TopicsPage from "./Components/TopicsPage.jsx";
import { Link } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />

			{/* <aside
				style={{
					width: "200px",
					padding: "20px",
					borderRight: "1px solid #ccc",
				}}
			>
				<nav>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li>
							<Link to="/api/articles">Articles</Link>
						</li>
						<li>
							<Link to="/api/topics">Topics</Link>
						</li>
					</ul>
				</nav>
			</aside> */}
			<Routes>
				<Route
					path="/articles"
					element={<Home />}
				/>
				<Route
					path="/articles/:id"
					element={<ArticlePage />}
				/>
				<Route
					path="/topics"
					element={<TopicsPage />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
