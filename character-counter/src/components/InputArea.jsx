import { useState } from "react";
import TextArea from "./input-area/TextArea";
import TextAreaOptions from "./input-area/TextAreaOptions";

function InputArea({
  currentText,
  setCurrentText,
  setCharacters,
  setWords,
  setSentences,
  setParagraphs,
}) {
  const [includeSpaces, setIncludeSpaces] = useState(true);

  const updateCounts = (textToUse, includeSpacesFlag) => {
    let characterCountText = includeSpacesFlag
      ? textToUse
      : textToUse.replace(/\s/g, "");

    setCharacters(characterCountText.length);
    setWords(textToUse !== "" ? textToUse.trim().split(/\s+/).length : 0);
    setSentences(textToUse.split(/[.?!]/g).filter(Boolean).length);
    setParagraphs(
      textToUse
        .trim()
        .split(/\n\s*\n+/)
        .filter((p) => p.trim() !== "").length
    );
  };

  return (
    <div className="input-area" style={{ width: "100%" }}>
      <TextArea
        text={currentText}
        setText={setCurrentText}
        updateCounts={updateCounts}
        includeSpaces={includeSpaces}
      />
      <TextAreaOptions
        includeSpaces={includeSpaces}
        setIncludeSpaces={setIncludeSpaces}
        text={currentText}
        updateCounts={updateCounts}
      />
    </div>
  );
}

export default InputArea;
