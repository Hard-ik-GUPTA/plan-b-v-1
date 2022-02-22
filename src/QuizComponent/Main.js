import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Options from './Options';
import mainlogo from './planB-logo.png';


const Main = ({ data, questionState, setQuestionState }) => {


    const imgArray = data.map((value) => {
        return value.img
    })

    console.log(imgArray)


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
        setQuestionState(data[y - 1])
    }
    return (
        <>
            <div className='questionHeader'>
                <p className='text-heading'>Question : {`${questionState.id} / ${data.length}`}</p>
                <img className="logo-image" src={mainlogo}></img>
            </div>

            <section className='questionNavContainer'>

                <div ><FiArrowLeft className='arrows' onClick={() => changeQuestionState(-1)} /></div>

                <div className="questionImgContainer">
                    <img src={questionState.img} />
                </div>

                <div ><FiArrowRight className='arrows' onClick={() => changeQuestionState(1)} /></div>


            </section>
            <div className="answerContainer">
                <Options data={data} questionState={questionState} setQuestionState={setQuestionState} />
            </div>

            <div className='hidden'>
                {imgArray.map((value) => {
                    return <img src={value}></img>
                })}
            </div>

        </>
    );
};

export default Main;
