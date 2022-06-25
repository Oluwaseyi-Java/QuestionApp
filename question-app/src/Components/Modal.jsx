import React from 'react'
import { useGlobalContext } from '../Context/AppContext'


const Modal = ({ content,score }) => {

    const { openBody, isDark } = useGlobalContext();

    return (
        <div className={`${isDark ? 'modal modalDark' : 'modal'}`}>
            <section>
                <h3>Alert</h3>
                <hr />
                <p>You have reached the end of this session. </p>
                <p>{content}{ score}</p>
                <p>{ }</p>
                <button onClick={openBody}>Go to Home</button>
            </section>
        </div>
    )
}

export default Modal