import "./faq.css";
import { useState } from "react";

function FAQ({ faqObject }) {
  const [isVisibile, setIsVisible] = useState(false);

  return (
    <div
      className={`faq transition-active ${
        isVisibile && "faq-active faq-bubbles"
      }`}
    >
      <p className="question">{faqObject.question}</p>
      <button
        className={`toggle-btn transition-active ${
          isVisibile && "toggle-btn-active"
        }`}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <img
          src={
            isVisibile ? "src/assets/cross.svg" : "src/assets/arrow-down.svg"
          }
        />
      </button>
      <p className={isVisibile ? "answer" : "hidden"}>{faqObject.answer}</p>
    </div>
  );
}

export default FAQ;
