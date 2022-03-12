import { React, useState, useContext } from 'react'
import { UserContext } from '../App'
import Reviewquiz from '../ReviewQuiz/Reviewquiz'
import data from '../QuizComponent/data'



const Result = () => {
    const { userDetails, setUserDetails } = useContext(UserContext)

    const [reviewState,setReviewState]=useState(false)



    return (
        <>
            <div className='result-container'>
            <h3>You Scored : <span className='marksText'>{(userDetails.marks)} / {data.length*4} </span>Marks</h3>

            
            <button onClick={()=>setReviewState(true)}className='reviewTestBtn'>Review Test</button>
            </div>
            {/* console.log(reviewState) */}
            {reviewState?<Reviewquiz/>:null}
            



        </>
    )
}

export default Result