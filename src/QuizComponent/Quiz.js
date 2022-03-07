import React, { useState, useEffect, useContext } from 'react';


import NavGrid from './NavGrid';
import Main from './Main';
import data from './data';
import ConfirmModal from './ConfirmModal';
import Result from './Result';
import { UserContext } from '../App'
import TimeEndModal from './TimeEndModal';







const Quiz = () => {

    


    const [questionState, setQuestionState] = useState(data[0])
    const [submitState, setSubmitState] = useState(false)
    const [submitConfirmState, setSubmitConfirmState] = useState(true)

    const [timer, setTimer] = useState(500)
    const { userDetails, setUserDetails } = useContext(UserContext)
    const [timeEndState,setTimeEndState]=useState(false)
    const [ testSubmitState,setTestSubmitState]=useState(false)


    useEffect(() => {
      calculateMarks()
      
    }, [timer])

    



    

    setTimeout(() => {
        if (timer > 0) {
            setTimer(timer - 1);
            console.log(timer);
        }
        else
        setTimeEndState(true)
    }, 1000);

    // setTimeout(()=>
    //     submitForm()
    // ,10000)



    const showResult = () => {
        setSubmitState(false)
        setSubmitConfirmState(false)

    }

    const calculateMarks = () => {
        const correct = data.filter(x => x.selected.value === x.answer)
        const incorrect = data.filter(x => (x.selected.value !== x.answer && x.selected !== 'x'))
        let marks = correct.length * 4 - incorrect.length
        console.log(correct.length, incorrect.length, marks);
        
        setUserDetails({ ...userDetails, marks })
        console.log(userDetails);

    }

    const submitForm = async () => {


        console.log("written to firebase")

        const response = await fetch("https://plan-b-webapp-default-rtdb.asia-southeast1.firebasedatabase.app/planBtestResponse.json",
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userDetails
                })
            })

        showResult()

    }


    return (
        <>

            {
                submitConfirmState ?
                    <>
                        <div className="quiz-container container">
                            <section className='navGridSection'>
                                <p className='text-heading navGridHeader full-text'>Question Pallete</p>
                                <p className='text-heading navGridHeader short-text'>Ques. Nav</p>
                                <NavGrid data={data} questionState={questionState} setQuestionState={setQuestionState} />


                            </section>
                            <section className='questionContainer'>
                                <Main data={data} questionState={questionState} setQuestionState={setQuestionState} />
                            </section>

                        </div>
                        <div className='submitTest'>
                                    <button className="submitTestBtn"onClick={() => setSubmitState(true)}>Submit Test</button>
                                </div>
                    </> :
                    <Result />
            }


            {submitState ? <ConfirmModal setSubmitState={setSubmitState} setSubmitConfirmState={setSubmitConfirmState}  setTestSubmitState={setTestSubmitState} data={data} /> : null}

            {submitConfirmState && timeEndState? <TimeEndModal submitForm={submitForm} setTimeEndState={setTimeEndState}/> :null}
            {console.log(submitConfirmState,timeEndState)}
        </>

    )
}

export default Quiz