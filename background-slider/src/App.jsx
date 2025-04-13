import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <main
      className="main-content background-image"
      style={{ backgroundImage: `url("src/assets/image${currentImage}.jpg")` }}
    >
      <button
        className="btn"
        style={{ borderRight: "none" }}
        onClick={() =>
          currentImage <= 1
            ? setCurrentImage(5)
            : setCurrentImage((prev) => prev - 1)
        }
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="focus-container">
        <div
          className="focus background-image"
          style={{
            backgroundImage: `url("src/assets/image${currentImage}.jpg")`,
          }}
        ></div>
      </div>

      <button
        className="btn"
        style={{ borderLeft: "none" }}
        onClick={() =>
          currentImage >= 5
            ? setCurrentImage(1)
            : setCurrentImage((prev) => prev + 1)
        }
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </main>
  );
}

export default App;
