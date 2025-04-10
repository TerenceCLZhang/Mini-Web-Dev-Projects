import "./Options.css";

function Options({
  brushSize,
  setBrushSize,
  setColor,
  clearCanvas,
  toggleEraser,
  isEraser,
}) {
  return (
    <div className="options">
      <div className="options-left-container">
        <div className="brush-size">
          <button
            onClick={() => setBrushSize((prev) => (prev > 5 ? prev - 5 : prev))}
          >
            -
          </button>
          <span>{brushSize}</span>
          <button
            onClick={() =>
              setBrushSize((prev) => (prev < 50 ? prev + 5 : prev))
            }
          >
            +
          </button>
        </div>
        <div className="color-picker">
          <input
            type="color"
            name="color"
            id="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="eraser-tool">
          <button onClick={toggleEraser}>
            <img
              src={isEraser ? "src/assets/eraser.svg" : "src/assets/marker.svg"}
              alt={isEraser ? "Switch to Brush" : "Switch to Eraser"}
            />
          </button>
        </div>
      </div>

      <div className="clear-canvas">
        <button onClick={clearCanvas}>X</button>
      </div>
    </div>
  );
}

export default Options;
