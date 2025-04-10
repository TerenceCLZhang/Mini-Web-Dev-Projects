import { useState } from "react";
import "./App.css";
import Canvas from "./Canvas";
import Options from "./Options";

function App() {
  const [brushSize, setBrushSize] = useState(10);
  const [color, setColor] = useState("#000000");
  const [isEraser, setIsEraser] = useState(false);

  const clearCanvas = () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const toggleEraser = () => setIsEraser((prev) => !prev);

  return (
    <main className="main-content">
      <Canvas brushSize={brushSize} color={color} isEraser={isEraser} />
      <Options
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        setColor={setColor}
        clearCanvas={clearCanvas}
        toggleEraser={toggleEraser}
        isEraser={isEraser}
      />
    </main>
  );
}

export default App;
