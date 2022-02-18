import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Options from './Options';

const Main = ({ data, questionState, setQuestionState}) => {


const imgArray=data.map((value)=>{
    return value.img
})

console.log(imgArray)

    const renderquestionImages=()=>{
        
    }



    const checkBoundary = (param) => {
        if (param <= 0) {
            console.log(data.length)
            return data.length
        }
        else if (param > data.length)
            return 1
        else
            return param

    }
    const changeQuestionState = (param) => {
        const x = (parseInt(questionState.id) + param)
        const y = checkBoundary(x)
        console.log(y)
        setQuestionState(data[y-1])
    }
    return (
        <>
            <div className="mainContainer">
                <section className='questionCount'>
                    <p>{`${questionState.id} / ${data.length}`}</p>
                </section>

                <section className='questionNavContainer'>

                <FiArrowLeft className='arrows' onClick={() => changeQuestionState(-1)} />

                <div className="questionContainer">
                    <img src={questionState.img} />
                </div>

                <FiArrowRight  className='arrows'  onClick={() => changeQuestionState(1)} />


                </section>
                <div className="answerContainer">
                    <Options data={data} questionState={questionState} setQuestionState={setQuestionState}/>
                </div>

                <div className='hidden'>
                    {imgArray.map((value)=>{
                        console.log(value);
                        return <img src={value}></img>
                    })}
                </div>
            </div>

        </>
    );
};

export default Main;
