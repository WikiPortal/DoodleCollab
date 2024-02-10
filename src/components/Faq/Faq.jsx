import React, { useState, useEffect } from "react";

import { questionsArray } from "../../data/Questions";
//style
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Faq = () => {
  const [questions, setQuestions] = useState([]);
  const [isAnswerOpenArray, setIsAnswerOpenArray] = useState([]);

  useEffect(() => {
    setQuestions(questionsArray);
    setIsAnswerOpenArray(new Array(questionsArray.length).fill(false));
  }, []);

  const handleToggleAnswer = (index) => {
    const newArray = [...isAnswerOpenArray];
    newArray[index] = !newArray[index];
    setIsAnswerOpenArray(newArray);
  };

  return (
    <section className="faq-section">
      <div className="max-w-full bg-no-repeat bg-[initial] flex flex-col items-center mt-11 mb-5 p-4">
        <p className="text-6xl font-semibold leading-none text-center sm:text-4xl lg:text-6xl" style={{fontFamily: "sans-serif"}}>
          Frequently Asked <br /> Questions
        </p>
        <div className="flex justify-center items-center mt-[30px] max-w-[80vw]">
          <ul className="lg:min-w-[80vw] max-h-[600px] leading-6 list-none min-w-[auto]">
            {questions.map((data, index) => (
                <li className="text-[12px] sm:text-[13px] min-w-[70%] flex flex-col text-[black] bg-white min-h-[80px] max-h-40 leading-7 relative cursor-pointer mb-2.5 mx-4 rounded-[10px]" style={{fontFamily: "sans-serif"}} key={index}>
                <div
                  className='flex justify-between text-left font-semibold text-base lg:text-xl pt-6 px-6'
                  style={{fontFamily: "sans-serif"}}
                  onClick={() => handleToggleAnswer(index)} 
                >
                    {data.question}
                    <span className="pr-[10px]">
                      <motion.div
                        className="pl-2 h-8 w-8 font-bold"
                        onClick={() => handleToggleAnswer(index)}
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate: isAnswerOpenArray[index] ? "45deg" : 0,
                        }}
                        exit={{ rotate: "0" }}
                        transition={easeInOut}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </motion.div>
                    </span>
                  </div>
                  <AnimatePresence>
                    {isAnswerOpenArray[index] && (
                      <motion.section
                        className="pb-2 pl-6 break-words min-w-[auto]"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="text-left py-6" key={index}>
                          {data.answer}
                        </p>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
