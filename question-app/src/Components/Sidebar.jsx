import React from 'react'
import img from '../Images/avatar3.png'
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from '../Context/AppContext'

const Sidebar = () => {
  const { closeSidebar, isDark, data,
    getCourse, openBody, isDesktop } = useGlobalContext();




  return (
    <aside id={`${isDesktop?"DesktopView":""}`} className={`${isDark ? "aside" : ""}`}>
      <FaTimes className="close fa" onClick={closeSidebar} />
      <h3>Revise</h3>
      <img src={img} alt="pic" />
      <div className='navigation'>
        <ul onClick={openBody}>
          {data.map((item) => {
            return <li
              key={item.id}
              onClick={() => {
                getCourse(item.id, item.level)
                closeSidebar(item.id)
              }}>{item.level} level</li>
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar