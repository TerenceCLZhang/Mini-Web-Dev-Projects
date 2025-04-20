import "../../css/text-info/TextInfoContainer.css";

function TextInfoContainer({ heading, count, bgColor }) {
  const formatCount = () => {
    if (count > 999999) {
      return (
        <>
          <span>&#8805;</span>
          {(999999).toLocaleString()}
        </>
      );
    }
    return count.toLocaleString();
  };

  return (
    <div className="text-info-container" style={{ backgroundColor: bgColor }}>
      <span className="count">{formatCount()}</span>
      <span className="heading">Total {heading}</span>
    </div>
  );
}

export default TextInfoContainer;
