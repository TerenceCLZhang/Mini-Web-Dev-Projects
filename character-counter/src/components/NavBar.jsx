import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../css/NavBar.css";

function NavBar({ isDarkMode, setIsDarkMode }) {
  return (
    <nav className="nav-bar">
      <span className="title">Character Counter</span>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="light-dark-btn"
      >
        <FontAwesomeIcon icon={!isDarkMode ? faMoon : faSun} />
      </button>
    </nav>
  );
}

export default NavBar;
