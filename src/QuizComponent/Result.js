import { React, useState, useContext } from 'react'
import { UserContext } from '../App'
import Reviewquiz from './ReviewQuiz/Reviewquiz'


import Quiz from './Quiz'

const Result = () => {
    const { userDetails, setUserDetails } = useContext(UserContext)



    return (
        <div>
            <p>Result</p>

            {(userDetails.marks)}

        </div>
    )
}

export default Result