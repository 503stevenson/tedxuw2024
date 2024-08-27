import React, { useState } from 'react'
import { faq_star } from '../../assets'
import './Question.css';

const Question = ({ question, answer, img, position, altText }) => {
  const [isOpen, setIsOpen] = useState(false)
  const answerLines = answer.split('\n');

  return (
    <div className={`qanda ${isOpen ? 'open' : ''}`}>
      <div className="question-section">
        <div className='question'>{question}</div>
        <img src={faq_star} alt="Toggle Answer" onClick={() => setIsOpen(!isOpen)} className="star" />
      </div>
      {isOpen && answerLines.length > 1 && (
        <div className='answer'>
          <p>{answerLines[0]}</p>
          <ul>
            {answerLines.slice(1, -1).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <p>{answerLines[answerLines.length - 1]}</p>
        </div>
      )}
      {isOpen && answerLines.length == 1 && position == "left" && (
        <div className='answer-img'>
          <img className="left-image" src={img} alt={altText}/>
          <p className="right-text">{answerLines[0]}</p>
        </div>
      )}
      {isOpen && answerLines.length == 1 && position == "right" && (
        <div className='answer-img'>
          <p className="left-text">{answerLines[0]}</p>
          <img className="right-image" src={img} alt={altText}/>
        </div>
      )}
    </div>
  )
}

export default Question