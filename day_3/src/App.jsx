import React, { useState } from "react";
import { faqs } from "./utils/faqArray";
import Faq from "./components/Faq";

const App = () => {
  const [openIndex, setOpenIndex] = useState([]);

  // Open the clicked FAQ, or close it if already open
  const toggleOpen = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((prev) => prev !== index) : [index]
    );
    // setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center p-2">
      <div className="w-full max-w-[600px]">
        <button
          onClick={() => setOpenIndex([])}
          className="border-none rounded-md px-2  py-2 cursor-pointer bg-blue-500 text-white"
        >
          Collapse all
        </button>
        <button
          onClick={() => setOpenIndex(faqs.map((_, idx) => idx))}
          className="ml-2 border-none rounded-md px-2  py-2 cursor-pointer bg-red-500 text-white"
        >
          Expand all
        </button>
        {faqs.map((faq, idx) => (
          <Faq
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex.includes(idx)}
            toggleOpen={() => toggleOpen(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
