import { useState, useEffect } from "react";
import "./App.css";
import KeyCodeContainer from "./KeyCodeContainer";

function App() {
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => setCurrentEvent(event);

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="main-content">
      {!currentEvent ? (
        <div className="start-div">
          <h1>Press any key to get the keyCode</h1>
        </div>
      ) : (
        <>
          {["key", "keyCode", "code"].map((label) => (
            <KeyCodeContainer
              key={label}
              label={label}
              element={currentEvent[label]}
            />
          ))}
        </>
      )}
    </main>
  );
}

export default App;
