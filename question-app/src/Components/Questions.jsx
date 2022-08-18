import React, {  useState } from 'react'
import { FaCheck, FaClock, FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../Context/AppContext'
import Modal from './Modal'


const Query = () => {
    let search = window.localStorage.getItem("data")
    if (!search) return {};

    return JSON.parse(search)
}

const Questins = () => {

    const { isDark } = useGlobalContext()
    const [questionsData, setQuestionsData] = useState(Query)

    console.log(questionsData)
 
    
    const [letModal, setLetModal] = useState({
        isOpen: false,
        content: ""
    })
    const [index, setIndex] = useState(0)
    const [correctCount, setCorrectCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false)
    const [noIdea, setNoIdea] = useState(0)

    const checkNumber = (number) => {
        if (number > (questionsData.length - 1)) {
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
            if (newIndex > (questionsData.length - 1)) {
                setLetModal({
                    ...letModal, isOpen: true,
                    content: "Your score is "
                })
                return questionsData.length - 1
            }

            return newIndex
        })
    }

    const Previous = () => {
        setIndex((index) => {
            const newIndex = index + 1;

            setNoIdea(noIdea + 1)
            if (noIdea >= (questionsData.length)) {
                setNoIdea(noIdea)
            }
            return checkNumber(newIndex)
        })
    }

    return (
        <section className={`${isDark ? "SectionDark" : ""}`}>
            {letModal.isOpen && <Modal content={letModal.content} score={correctCount} />}
            <div className='question-top'>
                <span ><FaCheck />{ } Correct</span>
                <span ><FaTimes />{questionsData.length - correctCount} Wrong | {noIdea} No Idea</span>
                <span ><FaClock /> {"23:01"}</span>
            </div>
            <div className='question-body'>
                <p className='head'>
                    | Question {index + 1} ({questionsData.length - (index + 1)} remaining)
                </p>
                <p>{ questionsData[index].question}</p>
                <p>Answer option</p>

                <form>
                    {questionsData[index].incorrect_answers.map((value, index) => {
                        return <label key={index} >
                            <input
                                type="radio"
                                value={value}
                                name="answer"
                                onClick={() => {
                                    // if (value.isAnswer) {
                                    //     setIsCorrect(true)
                                    // } else {
                                    //     setIsCorrect(false)
                                    // }
                                }} /> {value}<br />
                        </label>
                    })


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