import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import "./Note.css";

function Note({ id, content, isEditing: initialEditing, setNotes }) {
  const [isEditing, setIsEditing] = useState(initialEditing);

  const updateContent = (newContent) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );
  };

  return (
    <div className="note">
      <div className="header">
        <button onClick={() => setIsEditing(!isEditing)}>
          <FontAwesomeIcon icon={isEditing ? faSave : faEdit} />
        </button>
        <button
          onClick={() =>
            setNotes((prev) => prev.filter((item) => item.id !== id))
          }
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="text-area">
        {isEditing ? (
          <textarea
            name="text-edit"
            id="text-edit"
            className="text-edit"
            onChange={(e) => updateContent(e.target.value)}
            value={content}
          />
        ) : (
          <p className="text-show">{content}</p>
        )}
      </div>
    </div>
  );
}

export default Note;
