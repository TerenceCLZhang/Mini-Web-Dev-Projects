import "../../css/input-area/TextArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function TextArea({ text, setText, updateCounts, includeSpaces }) {
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateCounts(newText, includeSpaces);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Text Copied"))
      .catch((err) => {
        alert("Failed to copy text");
        console.log(err);
      });
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      updateCounts(clipboardText, includeSpaces);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Do you want to delete this text?")) {
      setText("");
      updateCounts("", includeSpaces);
    }
  };

  return (
    <div className="text-area-input">
      <textarea
        name="text"
        placeholder="Start typing here... (or paste your text)"
        rows={10}
        onChange={handleChange}
        className="text-area"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        value={text}
      ></textarea>
      {text.length === 0 && (
        <div className="paste">
          <button onClick={handlePaste}>
            <span className="icon">
              <FontAwesomeIcon icon={faClipboard} />
            </span>{" "}
            Paste Text
          </button>
        </div>
      )}
      {text.length !== 0 && (
        <>
          <div className="icon trash">
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="icon copy">
            <button onClick={handleCopy}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TextArea;
