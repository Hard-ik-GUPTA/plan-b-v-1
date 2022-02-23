import React, { useState, useEffect } from 'react';
import { collection, detDocs, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";


import NavGrid from './NavGrid';
import Main from './Main';
import data from './data';
import ConfirmModal from './ConfirmModal';
import Result from './Result';






const Quiz = () => {

    const [questionState, setQuestionState] = useState(data[0])
    const [submitState, setSubmitState] = useState(false)
    const [submitConfirmState, setSubmitConfirmState] = useState(true)

    const marks=0;





    return (
        <>

            {
                submitConfirmState ?
                    <>
                        <div className="quiz-container">
                            <section className='navGridSection'>
                                <p className='text-heading navGridHeader'>Question Pallete</p>
                                <NavGrid data={data} questionState={questionState} setQuestionState={setQuestionState} />
                                <div className='submitTest'>
                                    <button onClick={() => setSubmitState(true)}>submit</button>
                                </div>
                            </section>
                            <section className='questionContainer'>
                                <Main data={data} questionState={questionState} setQuestionState={setQuestionState} />

                            </section>
                        </div>

                    </> :
                    <Result data={data} marks={marks} />
            }


            {submitState ? <ConfirmModal setSubmitState={setSubmitState} setSubmitConfirmState={setSubmitConfirmState} data={data} /> : null}

        </>
    )
}

export default Quiz