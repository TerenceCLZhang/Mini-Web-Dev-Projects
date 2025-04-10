import { useRef, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [liked, setLiked] = useState(0);
  const [hearts, setHearts] = useState([]);
  const clickTimeout = useRef(null);

  // Double click
  const handleClick = (e) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setLiked((prev) => prev + 1);
      createHeart(x, y);
    } else {
      clickTimeout.current = setTimeout(() => {
        clickTimeout.current = null;
      }, 500);
    }
  };

  const createHeart = (x, y) => {
    const id = Date.now();
    setHearts((prevHearts) => [...prevHearts, { id, x, y }]);

    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== id));
    }, 800);
  };

  return (
    <main className="main-content">
      <div className="text">
        <h1>
          Double click on the image to{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> it
        </h1>
        <p>
          Likes: <b>{liked}</b>
        </p>
      </div>
      <div className="image" onClick={handleClick}>
        <div className="hearts-overlay">
          {hearts.map(({ id, x, y }) => (
            <FontAwesomeIcon
              key={id}
              icon={faHeart}
              className="heart-overlay"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
