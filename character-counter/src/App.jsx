import { useState, useEffect } from "react";
import "./css/App.css";
import InputArea from "./components/InputArea";
import NavBar from "./components/NavBar";
import LetterDensity from "./components/LetterDensity";
import TextInfo from "./components/TextInfo";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [currentText, setCurrentText] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="content-container">
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="main-content">
        <h1>Analyze your text in real-time</h1>

        <InputArea
          currentText={currentText}
          setCurrentText={setCurrentText}
          setCharacters={setCharacters}
          setWords={setWords}
          setSentences={setSentences}
          setParagraphs={setParagraphs}
        />

        <TextInfo
          characters={characters}
          words={words}
          sentences={sentences}
          paragraphs={paragraphs}
        />

        <LetterDensity text={currentText} />
      </main>
    </div>
  );
}

export default App;
