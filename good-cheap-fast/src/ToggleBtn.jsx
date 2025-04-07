import { useState } from "react";
import "./ToggleBtn.css";

function ToggleBtn({ id, isActive, onClick }) {
  const [activatedBefore, setActivatedBefore] = useState(false);

  const handleClick = () => {
    if (!activatedBefore) setActivatedBefore(true);
    onClick();
  };

  return (
    <button
      id={id}
      className={`toggle-btn ${isActive ? "toggled" : ""}`}
      onClick={handleClick}
    >
      <div className={`thumb ${activatedBefore ? "animate" : ""}`}></div>
    </button>
  );
}

export default ToggleBtn;
