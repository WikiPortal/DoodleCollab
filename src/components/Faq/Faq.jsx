import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { questionsArray } from '../../data/Questions';

import './faq.css';



const Faq = () => {
  const [questions, setQuestions] = useState([]);
  const [isAnswerOpenArray, setIsAnswerOpenArray] = useState([]);
  const [isIconRotated, setIsIconRotated] = useState(false);

  useEffect(() => {
    setQuestions(questionsArray);
    setIsAnswerOpenArray(new Array(questionsArray.length).fill(false));
  }, []);

  const handleToggleAnswer = (index) => {
    const newArray = [...isAnswerOpenArray];
    newArray[index] = !newArray[index];
    setIsAnswerOpenArray(newArray);
    // setIsSvgRotated(!isSvgRotated || newArray[index]);
  };

  const handleCloseInput = (index) => {
    const newArray = [...isAnswerOpenArray];
    newArray[index] = false;
    setIsAnswerOpenArray(newArray);
  };
  return (
    <div className='faq_container'>
      <p className='faq_head'>Frequently Asked <br /> Questions</p>
      <div className='q_list'>
        <ul>
          {questions.map((data, index) => (
            <div className='q_container' key={index}>
              <li>
                <div className='q_area'>
                  {data.question}
                  <span >
                    <motion.div
                      className="add_icon"
                      onClick={() => handleToggleAnswer(index)}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: isAnswerOpenArray[index] ? '45deg' : 0 }}
                      exit={{ rotate: '0' }}
                      transition={easeInOut}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" >
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd">
                        </path>
                      </svg>
                    </motion.div>
                  </span>
                </div>
                <AnimatePresence>
                  {isAnswerOpenArray[index] && (
                    <motion.section
                      className='ans_section'
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0, opacity: 0 }}


                    >
                      <p className='ans_text' key={index}>{data.answer}</p>
                    </motion.section>
                  )}
                </AnimatePresence>

              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq
