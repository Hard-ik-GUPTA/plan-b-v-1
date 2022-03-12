import React, { useState,useEffect } from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";

import Options from './Options';
import mainlogo from './planB-logo.png';
import TimerComponent from './TimerComponent';


const Main = ({ data, questionState, setQuestionState }) => {

    

    const imgArray = data.map((value) => {
        return value.img
    })



    const checkBoundary = (param) => {
        if (param <= 0) {
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
        // console.log(y)
        setQuestionState(data[y - 1])
    }
    return (
        <>
            <div className='questionHeader'>
                <p className='text-heading'>Question : {`${questionState.id} / ${data.length}`}</p>
                <img className="logo-image" src={mainlogo}></img>
            </div>
            <section className='questionNavContainer'>


                <div className="questionImgContainer">
                <TimerComponent />

                    <img className="questionImg" src={questionState.img} />
                </div>

                <div className='navArrowContainer'> 
                <BsFillArrowLeftCircleFill className='arrows' onClick={() => changeQuestionState(-1)} />
                <BsFillArrowRightCircleFill className='arrows' onClick={() => changeQuestionState(1)} />
                </div>

            </section>
            <div className="answerContainer">
                <Options data={data} questionState={questionState} setQuestionState={setQuestionState} />
            </div>

            <div className='hidden'>
                {imgArray.map((value,index) => {
                    return <img key ={index} src={value}></img>
                })}
            </div>

        </>
    );
};

export default Main;
