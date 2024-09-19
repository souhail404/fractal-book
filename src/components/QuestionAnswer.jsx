import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";


const QuestionAnswer = (props) => {
    const {question, answer} = props;
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className={`qa-wrapper ${showAnswer? 'show' : 'hide'}`}>
            <div className="q-wrapper" onClick={()=>{setShowAnswer(!showAnswer)}}>
                <h6 className='question'>{question}</h6>
                <FaChevronDown className={`icon ${showAnswer? 'show' : 'hide'}`} />
            </div>
            <div className={`a-wrapper ${showAnswer? 'show' : 'hide'}`}>
                <p className='answer'>{answer}</p>
            </div>
        </div> 
    )
}

export default QuestionAnswer