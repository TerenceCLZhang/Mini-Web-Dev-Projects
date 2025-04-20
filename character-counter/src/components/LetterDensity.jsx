import { useEffect, useState } from "react";
import "../css/LetterDensity.css";
import DensityBar from "./letter-density/DensityBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function LetterDensity({ text }) {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [letterCounts, setLetterCounts] = useState({});

  // Reset if text is empty string
  useEffect(() => {
    if (!text) setIsSeeMore(false);
  }, [text]);

  // Get a count of all letters in the text
  useEffect(() => {
    const textLowerCase = text.toLowerCase();
    const counts = {};

    for (let char of textLowerCase) {
      if (/[a-z]/.test(char)) {
        counts[char] = (counts[char] || 0) + 1;
      }
    }

    setLetterCounts(counts);
  }, [text]);

  const totalLetters = Object.values(letterCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="letter-density">
      <h2>Letter Density</h2>
      {!text || totalLetters === 0 ? (
        <p style={{ textAlign: "left" }}>
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <>
          {Object.entries(letterCounts)
            .sort(([, a], [, b]) => b - a) // Sort descending
            .slice(0, isSeeMore ? undefined : 5) // Set limit to five if user has not clicked the "Show More" button otherwise show all
            .map(([letter, count]) => (
              <DensityBar
                key={letter}
                letter={letter}
                count={count}
                value={(count / totalLetters) * 100}
              />
            ))}

          <button onClick={() => setIsSeeMore(!isSeeMore)}>
            {!isSeeMore ? (
              <>
                See More <FontAwesomeIcon icon={faChevronDown} />
              </>
            ) : (
              <>
                See Less <FontAwesomeIcon icon={faChevronUp} />
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}

export default LetterDensity;
