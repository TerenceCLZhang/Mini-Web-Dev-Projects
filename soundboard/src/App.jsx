import { useState } from "react";
import "./App.css";

function App() {
  const [currentSound, setCurrentSound] = useState(null);

  const sounds = [
    "Airhorn",
    "Among Us",
    "Anime Wow",
    "Bruh",
    "Emotional Damage",
    "Sad Violin",
    "Thug Life",
    "Vine Boom",
  ];

  const playSound = (soundString) => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }

    const formattedString = soundString.toLowerCase().replace(/\s+/g, "-");
    const audio = new Audio(`src/assets/${formattedString}.mp3`);

    audio.play();
    setCurrentSound(audio);
  };

  return (
    <main className="main-content">
      {sounds.map((sound) => (
        <button key={sound} onClick={() => playSound(sound)}>
          {sound}
        </button>
      ))}
    </main>
  );
}

export default App;
