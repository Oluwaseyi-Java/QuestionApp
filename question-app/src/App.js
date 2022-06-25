
import { useEffect, useRef } from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Modal from './Components/Modal';
import Questions from './Components/Questions';
import Sidebar from "./Components/Sidebar"
import { useGlobalContext } from "./Context/AppContext"


function App() {


  const { isSidebarOpen, isBodyOpen, isQuestionOpen,
    isDark, openSidebar, myLevel, course } = useGlobalContext();

  const ref = useRef(null)
  console.log(ref)

  useEffect(() => {
    if (ref.current.clientWidth === 800) {
      openSidebar()
    }
  }, [])



  return (
    <div className={`${isDark ? "App AppDark" : "App"}`} ref={ref}>
      <div className='sizing'>
        {isSidebarOpen && <Sidebar />}
        <div className='desktop'>
          <Header />
          {course[0] ?
            <p className='level'>{myLevel} Level CBT Revise</p> :
            <p className={`${isDark ? "welcomeMessageDark" : "welcomeMessage"}`}>Welcome,You can choose your level <a onClick={openSidebar}>here</a></p>}

          {isBodyOpen && <Body />}
          {isQuestionOpen && <Questions />}
        </div>
      </div>
    </div>
  );
}

export default App;
