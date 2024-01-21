import React from 'react';
import './faq.css';



const Faq = ({ darkMode }) => {
  const accordion_item = `faq-section ${darkMode ? 'dark-mode' : ''}`;
  return (

    <div className="accordion">
      <h1>Frequently Asked</h1>
      <h1>Questions</h1>
      <div className="accordion_item">
        <input type="checkbox" id="accordion1" />
        <label htmlFor="accordion1" className="accordion_item-title">
          <span className="icon"></span>
          What precisely is the definition of "DoodleCollab"?
        </label>
        <div className="accordion_item-desc">Answer:</div>
      </div>
      <div className="accordion_item">
        <input type="checkbox" id="accordion2" />
        <label htmlFor="accordion2" className="accordion_item-title">
          <span className="icon"></span>
          What is the turnaround time for the competition of the designs?
        </label>
        <div className="accordion_item-desc">Answer:</div>
      </div>
      <div className="accordion_item">
        <input type="checkbox" id="accordion3" />
        <label htmlFor="accordion3" className="accordion_item-title">
          <span className="icon"></span>
          Who is the desiginer I will be working with?
        </label>
        <div className="accordion_item-desc">Answer:</div>
      </div>
      <div className="accordion_item">
        <input type="checkbox" id="accordion4" />
        <label htmlFor="accordion4" className="accordion_item-title">
          <span className="icon"></span>
          Is it possible to pause my subscription?        
        </label>
        <div className="accordion_item-desc">Answer:</div>
      </div>
      <div className="accordion_item">
        <input type="checkbox" id="accordion5" />
        <label htmlFor="accordion5" className="accordion_item-title">
          <span className="icon"></span>
          Are there any items or services that are not covered in the packages?
        </label>
        <div className="accordion_item-desc">Answer:</div>
      </div>
      <div className="accordion_item">
        <input type="checkbox" id="accordion6" />
        <label htmlFor="accordion6" className="accordion_item-title">
          <span className="icon"></span>
          In which desing software do you typically create your designs?
        </label>
        <div className="accordion_item-desc">Answer:</div>
      </div>
    </div>
  );
};
export default Faq;

