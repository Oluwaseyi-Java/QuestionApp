
import React from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Questions from './Components/Questions';
import Sidebar from "./Components/Sidebar"
import { useGlobalContext } from "./Context/AppContext"


function App() {


  const { isSidebarOpen, isBodyOpen, isQuestionOpen,
    isDark, openSidebar, myLevel, course } = useGlobalContext();

  return (
    <div className={`${isDark ? "App AppDark" : "App"}`} >
      {isSidebarOpen && <Sidebar />}
      <div className='sizing'>
        <Sidebar className="Desktop" />
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
