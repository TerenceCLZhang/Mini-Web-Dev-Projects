import { useState } from "react";
import "./App.css";
import FAQ from "./Faq";
import faqList from "./faq.json";

function App() {
  const faqs = faqList.faq;

  return (
    <main className="main-content">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <FAQ faqObject={faq} key={faq.question} />
      ))}
    </main>
  );
}

export default App;
