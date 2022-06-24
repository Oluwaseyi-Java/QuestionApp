import React from 'react'
import { FaBars, FaCheckCircle, FaTimes } from "react-icons/fa"
import { useGlobalContext } from '../Context/AppContext'

const Header = () => {
    const { openSidebar, isDark, closeDarkMode, openDarkMode } = useGlobalContext();


    return (
        <header className="Header">

            <FaBars className='fa' onClick={openSidebar} />

            {isDark ? <span
                onClick={closeDarkMode}>Dark <FaTimes
                    className='fa' />
            </span> : <span
                onClick={openDarkMode}>Light  <FaCheckCircle
                    className='fa' />
            </span>}


        </header>
    )
}

export default Header