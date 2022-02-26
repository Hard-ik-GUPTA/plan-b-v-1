import React, { useState, useEffect } from 'react';


import data from '../QuizComponent/data';
import NavGridTemplate from './NavgridTemplate';
import MainTemplate from './MainTemplate';






const QuizTemplate = () => {

    const [questionState, setQuestionState] = useState(data[0])

    return (
        <>
            <div className="quiz-container">
                <section className='navGridSection'>
                    <p className='text-heading navGridHeader full-text'>Question Pallete</p>
                    <p className='text-heading navGridHeader short-text'>Ques. Nav</p>

                    <NavGridTemplate data={data} questionState={questionState} setQuestionState={setQuestionState} />

                </section>
                <section className='questionContainer'>
                    <MainTemplate data={data} questionState={questionState} setQuestionState={setQuestionState} />

                </section>
            </div>





        </>
    )
}

export default QuizTemplate