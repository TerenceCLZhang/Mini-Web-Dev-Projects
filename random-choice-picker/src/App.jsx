import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [options, setOptions] = useState([]);
  const [chosenOption, setChosenOption] = useState(-1);
  const [rolling, setRolling] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  const RandomlyChooseOption = () => {
    if (rolling || options.length === 0) return;

    setRolling(true);
    const randomPick = 30;
    let count = 0;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setChosenOption(randomIndex);
      count++;

      if (count >= randomPick) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 100);
  };

  return (
    <main className="main-content">
      <h2 style={{ fontSize: "1.5rem" }}>
        Enter all of the choices divided by a comma (','). <br />
        Press Enter or the "Roll" button when you're done.
      </h2>

      <textarea
        ref={textAreaRef}
        className="input-options"
        placeholder="Enter choices here..."
        rows={5}
        onChange={(e) => setOptions(e.target.value.split(","))}
        disabled={rolling}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            RandomlyChooseOption();
          }
        }}
      ></textarea>

      <div className="options">
        {options.map(
          (item, index) =>
            item && (
              <p
                key={index}
                className={`option ${chosenOption === index ? "picked" : ""}`}
              >
                {item}
              </p>
            )
        )}
      </div>

      <div className="btns">
        <button onClick={RandomlyChooseOption} disabled={rolling}>
          Roll
        </button>
        <button
          onClick={() => {
            setOptions([]);
            setChosenOption(-1);
            if (textAreaRef.current) textAreaRef.current.value = "";
          }}
          disabled={rolling}
        >
          Reset
        </button>
      </div>
    </main>
  );
}

export default App;
