import ToggleBtn from "./ToggleBtn";
import "./Toggle.css";

function Toggle({ label, isActive, onToggle }) {
  return (
    <div className="toggle">
      <ToggleBtn
        id={`toggle-${label}`}
        isActive={isActive}
        onClick={onToggle}
      />
      <label htmlFor={`toggle-${label}`} className="toggle-label">
        {label}
      </label>
    </div>
  );
}

export default Toggle;
