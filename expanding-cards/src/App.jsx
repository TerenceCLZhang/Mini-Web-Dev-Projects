import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "Black Sea Cliff",
    "Bottlenose Dolphin",
    "Girl Sitting on a Ledge",
    "Hanging Shoes",
    "Sunset at Reykjanes",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatImageName = (name) => {
    return name
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove punctuation
      .split(/\s+/) // Split by spaces
      .join("-"); // Join with hyphens
  };

  return (
    <main className="main-content">
      {images.map((name, index) => {
        const filename = formatImageName(name);
        const isActive = index === currentImageIndex;
        return (
          <div
            key={index}
            className={`image ${isActive ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img src={`src/assets/${filename}.jpg`} alt={name} />
            <p className="label">{name}</p>
          </div>
        );
      })}
    </main>
  );
}

export default App;
