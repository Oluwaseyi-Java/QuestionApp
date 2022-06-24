import React, { useEffect, useState } from 'react'
import { FaTimes, FaCheck, FaClock } from "react-icons/fa"
import { useGlobalContext } from '../Context/AppContext'
import Modal from './Modal'


const Questins = () => {

    const { isDark, myCourse, question, answer, openModal } = useGlobalContext()
    const [letModal, setLetModal] = useState({
        isOpen: false,
        content: ""
    })
    const [index, setIndex] = useState(0)

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

            if (newIndex > (question.length - 1)) {
                setLetModal({
                    ...letModal, isOpen: true,
                    content: "Your score is 2"
                })
                return question.length - 1
            }

            return newIndex
        }
        )
    }

    const Previous = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }


    return (
        <section className={`${isDark ? "SectionDark" : ""}`}>
            {letModal.isOpen && <Modal content={letModal.content} />}
            <div className='question-top'>
                <span ><FaCheck />{2} Correct</span>
                <span ><FaTimes />{1} Wrong</span>
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
                            <input type="radio" value={value.answer} name="answer" /> {value.answer}<br />
                        </label>
                    )
                    }
                </form>
            </div>
            <div className='question-btn'>
                <button id='btn1' onClick={Previous}>Previous</button>
                <button id='btn2' onClick={sendAnswer}>Send Answer</button>
            </div>
        </section>
    )
}
export default Questins