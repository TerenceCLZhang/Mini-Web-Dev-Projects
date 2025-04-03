import "./App.css";
import Testimonial from "./Testimonial";
import ProgressBar from "./ProgressBar";
import testimonialsData from "./testimonials.json";
import { useEffect, useState } from "react";

function App() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-content">
      <ProgressBar />
      <Testimonial testimonial={testimonialsData[testimonialIndex]} />
    </main>
  );
}

export default App;
