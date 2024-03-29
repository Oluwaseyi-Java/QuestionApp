import React from 'react'
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from '../Context/AppContext'

const Sidebar = ({ className }) => {
  const { closeSidebar, isDark, data, openBody } = useGlobalContext();

  return (
    <aside id={className} className={`${isDark ? "aside" : ""}`}>
      <FaTimes className="close fa" onClick={closeSidebar} />
      <h3
        onClick={() => {
          window.location.assign("/account")
        }}
        className='account'>Account</h3>
      <h3 className='filter'>Filter</h3>
      <div className='navigation'>
        <ul onClick={openBody}>
          {data.map((item) => {
            return <li
              key={item.id}
              onClick={() => {
                // getCourse(item.id, item.name)
                closeSidebar(item.id)
                window.location.assign(`/accessment/${item.id}`)
              }}>{item.name}</li>
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar