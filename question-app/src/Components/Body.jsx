import React from 'react'

import { useGlobalContext } from '../Context/AppContext'

const Body = () => {
    const { isDark, course, closeBody, getQuestion, getAnswer } = useGlobalContext();


    return (
        <>
            <main>

                {
                    course.map((data) => {
                        return (
                            <article
                                key={data.id}
                                className={`${isDark ? "article" : ""}`}
                                onClick={() => {
                                    getQuestion(data.id, data.type)
                                    getAnswer(data.id)
                                    closeBody(data.id)
                                }}
                            >
                                <img src={require("../Images/" + data.avatar + ".png")} alt={data.img} />
                                <p>{data.type}</p>
                                <p>{data.question.length}  questions</p>
                            </article>
                        )
                    })
                }

            </main>
        </>
    )
}

export default Body