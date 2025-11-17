import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import ArticlePage from "./Components/HomePage/ArticlePage/ArticlePage.jsx";
import TopicsPage from "./Components/TopicPage/TopicsPage.jsx";
import User from "./Components/User/User.jsx";

function App() {
	return (
		<div className="page-container">
			<Header />

			<div className="main-content">
				<Routes>
					<Route
						path="/"
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
					<Route
						path="/users"
						element={<User />}
					/>
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
