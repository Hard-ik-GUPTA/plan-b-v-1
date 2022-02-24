import { React, useState, useContext } from 'react'
import { UserContext } from '../App'
import Reviewquiz from './ReviewQuiz/Reviewquiz'
import data from './data'


import Quiz from './Quiz'

const Result = () => {
    const { userDetails, setUserDetails } = useContext(UserContext)



    return (
        <div>
            <div>
            <p>Result</p>

            {(userDetails.marks)}
            </div>

            {(data[0].selected.value)}


        </div>
    )
}

export default Result