import "../../css/searchBar.css";

function SearchBar() {
  return (
    <form id="search-bar-container">
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search..."
      />
      <button id="search-btn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
          alt="img"
        />
      </button>
    </form>
  );
}

export default SearchBar;
