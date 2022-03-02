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

    const [timer, setTimer] = useState(10)
    const { userDetails, setUserDetails } = useContext(UserContext)
    const [timeEndState,setTimeEndState]=useState(false)


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

        const response = await fetch("https://mathsquiz-848ba-default-rtdb.asia-southeast1.firebasedatabase.app/mathstestresponse.json",
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
                        <div className="quiz-container">
                            <section className='navGridSection'>
                                <p className='text-heading navGridHeader full-text'>Question Pallete</p>
                                <p className='text-heading navGridHeader short-text'>Ques. Nav</p>
                                <NavGrid data={data} questionState={questionState} setQuestionState={setQuestionState} />


                                <div className='submitTest'>
                                    <button onClick={() => setSubmitState(true)}>submit</button>
                                </div>
                            </section>
                            <section className='questionContainer'>
                                <Main data={data} questionState={questionState} setQuestionState={setQuestionState} />

                            </section>

                            {
                                Math.floor(timer / 60) + "mins" + timer % 60 + "secs"
                            }
                        </div>

                    </> :
                    <Result data={data} />
            }


            {submitState ? <ConfirmModal setSubmitState={setSubmitState} setSubmitConfirmState={setSubmitConfirmState} data={data} /> : null}

            {timeEndState? <TimeEndModal submitForm={submitForm} setTimeEndState={setTimeEndState}/> :null}
        </>
    )
}

export default Quiz