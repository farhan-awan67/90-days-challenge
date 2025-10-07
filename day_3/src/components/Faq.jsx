import React, { useState, useRef, useEffect } from "react";
import add from "../assets/Add.png";
import minus from "../assets/minus.png";

const Faq = ({ question, answer, toggleOpen, isOpen }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`border border-[#dbdbdb] ${
        isOpen ? "bg-[#f4f4f4]" : "bg-[#ffffff]"
      }  py-[15px] px-[24px] rounded-[16px] mt-[13px]`}
    >
      {/* question */}
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-medium text-[#1B1D1E]">{question}</h2>
        <img
          className={`${
            isOpen ? "w-[30px] h-[30px]" : "w-[20px] h-[20px]"
          } object-cover cursor-pointer transition-all duration-300 ease-in-out`}
          src={isOpen ? minus : add}
          alt={isOpen ? "minus" : "add"}
          //   onClick={() => setOpen(!open)}
          onClick={toggleOpen}
        />
      </div>

      {/* answer with animated open */}
      <div
        ref={contentRef}
        style={{
          height: height,
        }}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="mt-[12px]">
          <p className="text-base font-medium text-[#1B1D1E99]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
