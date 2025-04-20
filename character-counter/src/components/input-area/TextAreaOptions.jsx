import { useEffect, useState } from "react";
import "../../css/input-area/TextAreaOptions.css";

function TextAreaOptions({
  includeSpaces,
  setIncludeSpaces,
  text,
  updateCounts,
}) {
  const [readingTimeSecs, setReadingTimeSecs] = useState(0);
  const [readingTimeMins, setReadingTimeMins] = useState(0);
  const [readingTimeHours, setReadingTimeHours] = useState(0);

  useEffect(() => {
    const averageReadingSpeed = 250; // words per minute

    const calculateReadingTime = () => {
      if (!text) {
        setReadingTimeSecs(0);
        setReadingTimeMins(0);
        setReadingTimeHours(0);
        return;
      }

      const wordCount = text.trim().split(/\s+/).length;
      const totalTimeInMinutes = wordCount / averageReadingSpeed;
      const totalTimeInSeconds = Math.ceil(totalTimeInMinutes * 60);

      const hours = Math.floor(totalTimeInSeconds / 3600);
      const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
      const seconds = totalTimeInSeconds % 60;

      setReadingTimeHours(hours);
      setReadingTimeMins(minutes);
      setReadingTimeSecs(seconds);
    };

    calculateReadingTime();
  }, [text]);

  const handleExcludeSpacesChange = () => {
    const newIncludeSpaces = !includeSpaces;
    setIncludeSpaces(newIncludeSpaces);
    updateCounts(text, newIncludeSpaces);
  };

  return (
    <div className="text-area-below">
      <div className="options">
        <label htmlFor="exclude-spaces">
          <b>Exclude Spaces</b>
        </label>
        <input
          type="checkbox"
          name="exclude-spaces"
          checked={!includeSpaces}
          onChange={handleExcludeSpacesChange}
        />
      </div>
      <span>
        <b>Approx. reading time:</b>{" "}
        {readingTimeHours > 0 && `${readingTimeHours} hrs `}
        {readingTimeMins > 0 && `${readingTimeMins} mins `} {readingTimeSecs}{" "}
        secs
      </span>
    </div>
  );
}

export default TextAreaOptions;
