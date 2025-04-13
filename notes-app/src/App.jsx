import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      return JSON.parse(saved).map((note) => ({ ...note, isEditing: false }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <NavBar setNotes={setNotes} />
      <main className="main-content">
        {notes.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            content={item.content}
            isEditing={item.isEditing}
            setNotes={setNotes}
          />
        ))}
      </main>
    </>
  );
}

export default App;
