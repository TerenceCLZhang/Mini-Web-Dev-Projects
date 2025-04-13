import { useState } from "react";
import "./App.css";

function App() {
  const [currentSide, setCurrentSide] = useState(-1);

  const sides = [
    {
      id: 0,
      name: "PlayStation 5",
      image: "src/assets/playstation.jpg",
      className: "playstation",
      buttonClass: "playstation-btn",
    },
    {
      id: 1,
      name: "Xbox Series X",
      image: "src/assets/xbox.jpg",
      className: "xbox",
      buttonClass: "xbox-btn",
    },
  ];

  return (
    <main className="main-content">
      {sides.map(({ id, name, image, className, buttonClass }) => (
        <div
          key={id}
          className={`side ${className}`}
          style={{
            backgroundImage: `url(${image})`,
            width:
              currentSide === id
                ? "75vw"
                : currentSide === -1
                ? "50vw"
                : "25vw",
          }}
          onMouseEnter={() => setCurrentSide(id)}
          onMouseLeave={() => setCurrentSide(-1)}
        >
          <h2>{name}</h2>
          <a href="#" className={`buy-btn ${buttonClass}`}>
            Buy Now
          </a>
        </div>
      ))}
    </main>
  );
}

export default App;
