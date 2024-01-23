import React, { useState, useEffect } from "react";

import { questionsArray } from "../../data/Questions";
//style
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import "./faq.css";

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
      <div className="faq-container">
        <p className="faq-head">
          Frequently Asked <br /> Questions
        </p>
        <div className="faq-list">
          <ul>
            {questions.map((data, index) => (
              <div className="q-container" key={index}>
                <li>
                <div
                  className='q-area'
                  onClick={() => handleToggleAnswer(index)} 
                >
                    {data.question}
                    <span>
                      <motion.div
                        className="add-icon"
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
                        className="ans-section"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="ans-text" key={index}>
                          {data.answer}
                        </p>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
