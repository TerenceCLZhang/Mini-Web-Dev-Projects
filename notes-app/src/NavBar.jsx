import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

function NavBar({ setNotes }) {
  const handleClick = () => {
    setNotes((prev) => [
      ...prev,
      { id: Date.now(), content: "", isEditing: true },
    ]);
  };

  return (
    <nav className="nav-bar">
      <h1>Notes</h1>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faPlus} /> Add note
      </button>
    </nav>
  );
}

export default NavBar;
