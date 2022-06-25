import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { Data } from "../Data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isBodyOpen, setIsBodyOpen] = useState(false)
    const [isQuestionOpen, setIsQuestionOpen] = useState(false)

    const [isDark, setIsDark] = useState(false)
    const [data, setData] = useState(Data)
    const [course, setCourse] = useState([])
    const [question, setQuestion] = useState([])
    const [answer, setAnswer] = useState([])
    const [myLevel, setMyLevel] = useState("")
    const [myCourse, setMyCourse] = useState("")
    const [atempted, setAtempted]=useState(false)

    const openSidebar = (id) => {
        setIsSidebarOpen(true)
    }
    
    const closeSidebar = (id) => {
      
        setIsSidebarOpen(false)
    }
    const openBody = () => {
        setIsBodyOpen(true)
        setIsQuestionOpen(false)
    }
    const closeBody = (id) => {
        setIsBodyOpen(false)
        setIsQuestionOpen(true)
        setAtempted(true)
    }
    const openDarkMode = () => {
        setIsDark(true)
    }
    const closeDarkMode = () => {
        setIsDark(false)
    }
    const getQuestion = (id, mycourse) => {

        course.map((quest) => {
            return (quest.id === id ? setQuestion(quest.question) : "")
        })
        setMyCourse(mycourse)

    }
    const getAnswer = (id) => {

        course.map((quest) => {
            return (quest.id === id ? setAnswer(quest.answer) : "")
        })

    }
    const getCourse = (id, level) => {
        data.map((level) => {
            return (level.id === id ? setCourse(level.course) : "")
        }
        )
        setMyLevel(level)

    }

    return <AppContext.Provider value={
        {
            openSidebar, closeSidebar, isSidebarOpen,
            setIsSidebarOpen, openDarkMode, closeDarkMode,
            isDark, data, getCourse, course, myLevel,
            isBodyOpen, openBody, closeBody, isQuestionOpen,
            question, getQuestion, myCourse, answer, getAnswer,
            atempted
        }
    }>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider }
