import { useState } from "react";
import "./App.css";
import Toggle from "./Toggle";

function App() {
  const [selected, setSelected] = useState([]);

  const handleToggle = (label) => {
    setSelected((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      } else {
        const newSelection = [...prev, label];
        if (newSelection.length > 2) newSelection.splice(1, 1);
        return newSelection;
      }
    });
  };

  return (
    <main className="main-content">
      <h1>Every Project Has a Price — What's Yours?</h1>
      <div className="btns">
        {["Good", "Cheap", "Fast"].map((label) => (
          <Toggle
            key={label}
            label={label}
            isActive={selected.includes(label)}
            onToggle={() => handleToggle(label)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
