import Counter from "./Counter";
import "./CounterContainer.css";

function CounterContainer({ platform, number, label }) {
  return (
    <div className="counter-container">
      <img
        src={`./src/assets/${platform}.svg`}
        alt={`${platform} logo`}
        className="platform-icon"
      />
      <Counter number={number} />
      <p className="platform-label">{label}</p>
    </div>
  );
}

export default CounterContainer;
