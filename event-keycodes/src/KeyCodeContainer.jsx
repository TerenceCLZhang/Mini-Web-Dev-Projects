import "./KeyCodeContainer.css";

function KeyCodeContainer({ label, element }) {
  return (
    <div className="key-code-container">
      <p>{label}</p>
      <div className="code">{element}</div>
    </div>
  );
}

export default KeyCodeContainer;
