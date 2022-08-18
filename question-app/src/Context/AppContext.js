import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDark, setIsDark] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://opentdb.com/api_category.php")
            .then((response) => {
                setData(response.data.trivia_categories)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    const openSidebar = (id) => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = (id) => {

        setIsSidebarOpen(false)
    }

    const openDarkMode = () => {
        setIsDark(true)
    }
    const closeDarkMode = () => {
        setIsDark(false)
    }



    return <AppContext.Provider value={
        {
            openSidebar, closeSidebar, isSidebarOpen,
            setIsSidebarOpen, openDarkMode, closeDarkMode,
            isDark, data
        }
    }>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider }
