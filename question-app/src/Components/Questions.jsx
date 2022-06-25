import React, { useState } from 'react'
import { FaTimes, FaCheck, FaClock } from "react-icons/fa"
import { useGlobalContext } from '../Context/AppContext'
import Modal from './Modal'


const Questins = () => {

    const { isDark, myCourse, question, answer } = useGlobalContext()
    const [letModal, setLetModal] = useState({
        isOpen: false,
        content: ""
    })
    const [index, setIndex] = useState(0)
    const [correctCount, setCorrectCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false)
    const [noIdea, setNoIdea] = useState(0)

    const checkNumber = (number) => {
        if (number > (question.length - 1)) {
            return 0
        }
        if (number < 0) {
            return 0
        }
        return number
    }

    const sendAnswer = () => {

        setIndex((index) => {
            const newIndex = index + 1;

            if (isCorrect) {
                setCorrectCount(correctCount + 1)

            }
            if (newIndex > (question.length - 1)) {
                setLetModal({
                    ...letModal, isOpen: true,
                    content: "Your score is "
                })
                return question.length - 1
            }

            return newIndex
        })
    }

    const Previous = () => {
        setIndex((index) => {
            const newIndex = index + 1;

            setNoIdea(noIdea + 1)
            if (noIdea >= (question.length)) {
                setNoIdea(noIdea)
            }
            return checkNumber(newIndex)
        })
    }


    return (
        <section className={`${isDark ? "SectionDark" : ""}`}>
            {letModal.isOpen && <Modal content={letModal.content} score={correctCount} />}
            <div className='question-top'>
                <span ><FaCheck />{correctCount} Correct</span>
                <span ><FaTimes />{question.length - correctCount} Wrong | {noIdea} No Idea</span>
                <span ><FaClock /> {"23:01"}</span>
            </div>
            <div className='question-body'>
                <p className='head'>
                    {myCourse} | Question {index + 1} ({question.length - (index + 1)} remaining)
                </p>
                <p className='question'>{question[index]}</p>
                <p>Answer option</p>

                <form>
                    {answer[index].map((value, index) =>
                        <label key={index} >
                            <input
                                type="radio"
                                value={value.answer}
                                name="answer"
                                onClick={() => {
                                    if (value.isAnswer) {
                                        setIsCorrect(true)
                                    } else {
                                        setIsCorrect(false)
                                    }
                                }} /> {value.answer}<br />
                        </label>
                    )
                    }
                </form>

            </div>
            <div className='question-btn'>
                <button id='btn1' onClick={Previous}>No Idea</button>
                <button id='btn2' onClick={sendAnswer}>Send Answer</button>
            </div>
        </section>
    )
}
export default Questins