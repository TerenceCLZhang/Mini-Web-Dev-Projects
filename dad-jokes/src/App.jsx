import { useState, useEffect } from "react";
import "./App.css";
import { getRandomDadJoke } from "./api.js";

function App() {
  const [joke, setJoke] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    changeJoke();
  }, []);

  const changeJoke = async () => {
    setError(null);

    try {
      const retrievedJoke = await getRandomDadJoke();
      setJoke(retrievedJoke);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch joke. Please try again.");
    }
  };

  return (
    <main className="main-contents">
      <h1>Dad Joke Generator</h1>

      <div className="message">
        {" "}
        {error ? <p>ERROR: {error}</p> : <p>{joke}</p>}
      </div>
      <div className="new-joke-btn">
        <button onClick={changeJoke}>Get Another Joke</button>
      </div>
    </main>
  );
}

export default App;
