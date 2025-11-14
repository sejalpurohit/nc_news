function SearchBar({ setSearchTerm }) {
	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search articles..."
				onChange={(e) => setSearchTerm(e.target.value.trim())}
			/>
		</div>
	);
}

export default SearchBar;
