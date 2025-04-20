import TextInfoContainer from "./text-info/TextInfoContainer";
import "../css/TextInfo.css";

function TextInfo({ characters, words, sentences, paragraphs }) {
  const textInfoData = [
    {
      heading: "Characters",
      count: characters,
      bgColor: "rgba(223, 0, 36, 0.75)",
    },
    { heading: "Words", count: words, bgColor: "rgba(243, 195, 0, 0.75)" },
    {
      heading: "Sentences",
      count: sentences,
      bgColor: "rgba(0, 171, 159, 0.75)",
    },
    {
      heading: "Paragraphs",
      count: paragraphs,
      bgColor: "rgba(46, 109, 180, 0.75)",
    },
  ];

  return (
    <div className="text-info">
      {textInfoData.map((item, index) => (
        <TextInfoContainer
          key={index}
          heading={item.heading}
          count={item.count}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
}

export default TextInfo;
