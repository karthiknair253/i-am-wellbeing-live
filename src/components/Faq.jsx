import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      ques: "Is attendance compulsory for all classes?",
      answer: "Yes, full attendance is compulsory to receive the certificate.",
    },
    {
      ques: "What is the modality and duration of the course?",
      answer:
        "The course will be held online via Zoom on Saturdays and Sundays 10 am to 12 pm. Duration: 6 months (2 months of classes and 4 months of supervision)",
    },
    {
      ques: "What is the TICP course?",
      answer:
        "Trauma-Informed Care Practices Certificate Course is a 62 hours course on trauma-informed care and healing.",
    },
    {
      ques: "How will the supervision sessions be conducted?",
      answer:
        "Supervision will be conducted in small groups of two to four participants with one supervisor. Each session will be conducted for 90 minutes, fortnightly.",
    },
    {
      ques: "What fees apply after receiving the scholarship?",
      answer:
        "If you meet the criteria for the scholarship, 50% of your total course fees will be waived off.",
    },
    {
      ques: "What is the refund policy?",
      answer:
        "If the participant wants to withdraw before the course begins, 50% of the course fee shall be returned upon connecting with the organisation 15 days before the course commencement.",
    },
  ];

  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const halfLength = Math.ceil(questions.length / 2);
  const columns = [questions.slice(0, halfLength), questions.slice(halfLength)];

  return (
    <>
      <div className="bg-yellow-300 mt-10 pb-1 pt-2 pr-2 lg:pl-2 h-full">
        <h1 className="text-4xl font-bold m-4 mb-0 max-md:text-3xl">FAQ:</h1>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 p-4 text-xl max-md:text-lg max-md:gap-0">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="w-full">
              {column.map((question, index) => {
                const currentIndex =
                  colIndex === 0 ? index : index + halfLength;
                return (
                  <div
                    className={`border-2 bg-white rounded-[30px] transition-all duration-300 overflow-hidden p-6 ${
                      openIndex === currentIndex ? "max-w-full" : "max-w-[95%]"
                    }`}
                    key={question.ques}
                    style={{
                      margin: "15px auto",
                      minHeight: openIndex === currentIndex ? "80px" : "50px",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h1 className="w-full text-lg font-bold  font-alegreya">
                        {question.ques}
                      </h1>
                      <div
                        onClick={() => handleToggle(currentIndex)}
                        className="text-base flex justify-center items-center cursor-pointer border rounded-full border-yellow-500 w-8 h-8"
                      >
                        {openIndex === currentIndex ? <FaMinus /> : <FaPlus />}
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === currentIndex
                          ? "max-h-[300px] mt-2"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-[#444]  font-alegreya">{question.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
