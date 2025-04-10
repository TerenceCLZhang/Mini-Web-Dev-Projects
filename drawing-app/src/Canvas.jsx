import { useRef, useState, useEffect } from "react";

function Canvas({ brushSize, color, isEraser }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 800;
    canvas.height = 600;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";

    setContext(ctx);
  }, []);

  // Update brush size
  useEffect(() => {
    if (context) {
      context.lineWidth = brushSize;
    }
  }, [brushSize, context]);

  // Update color / eraser
  useEffect(() => {
    if (context) {
      context.strokeStyle = isEraser ? "#ffffff" : color;
    }
  }, [color, isEraser, context]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      onMouseLeave={endDrawing}
      className="drawing-canvas"
      style={{ border: "5px solid rgb(55, 124, 189)", display: "block" }}
    ></canvas>
  );
}

export default Canvas;
