import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
// import { FaCheck } from "react-icons/fa"
import { useGlobalContext } from '../Context/AppContext'

const Body = () => {
    const { isDark } = useGlobalContext();

    const { id } = useParams()
    const [myCourse, setMyCourse] = useState([
        {
            difficulty: "easy",
            type: "multiple",
            id: id
        },
        {
            difficulty: "medium",
            type: "multiple",
            id: id
        },
        {
            difficulty: "difficult",
            type: "multiple",
            id: id
        },
        {
            difficulty: "easy",
            type: "boolean",
            id: id
        },
        {
            difficulty: "medium",
            type: "boolean",
            id: id
        },
        {
            difficulty: "difficult",
            type: "boolean",
            id: id
        }
    ])
    return (
        <>
            {<main>
                {myCourse.map((item, index) => {
                    return (
                        <article
                            className={`${isDark ? "article" : ""}`}
                            key={index}
                            onClick={() => {
                                axios.get(`https://opentdb.com/api.php?amount=10&category=${item.id}&difficulty=${item.difficulty}&type=${item.type}`)
                                    .then((response) => {
                                        console.log(response)
                                        window.localStorage.setItem("data", JSON.stringify(response.data.results))
                                        window.location.assign(`/test`)
                                    })
                                    .catch((err) => {
                                        console.error(err)
                                    })
                            }}
                        >
                            <img src={require("../Images/avatar2.png")} alt="pic" />
                            <p>Type: {item.type}</p>
                            <p>Difficulty: {item.difficulty} </p>
                            {   // {atempted && data.id ? <FaCheck /> : ""}
                            }
                        </article>
                    )
                }
                )
                }
            </main>}
        </>
    )
}

export default Body