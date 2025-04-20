import "../../css/DensityBar.css";

function DensityBar({ letter, count, value }) {
  return (
    <div className="density-bar">
      <span className="letter">{letter.toUpperCase()}</span>
      <div className="bar-container">
        <div className="bar">
          <div className="bar-fill" style={{ width: `${value}%` }}></div>
        </div>
      </div>
      <div className="info">
        <span>
          {count} ({value.toFixed(2)}%)
        </span>
      </div>
    </div>
  );
}

export default DensityBar;
