import React, { useRef } from 'react';
import { useEffect } from 'react';
import './quiz.css'

const NavGrid = ({ data, questionState, setQuestionState }) => {

    const changeQuestionState = (param) => {
        setQuestionState(param)

    }


    useEffect(() => {
        console.log("scroll");
        executeScroll()
    }, [questionState])




        const navGridContainerRef=useRef(null)
        
     
        const executeScroll = () => navGridContainerRef.current.scrollIntoView({ behavior: 'smooth' })   
     


    

    return (
        <>
            <div  className='navGridContainer'> 
                {data.map((value) => {

                    if (value.selected !== 'x') {
                        if (questionState.id === value.id)

                            return (
                                <div className='navGridItem ' key={value.id} ref={navGridContainerRef}
                                    style={{
                                        outline: "3px solid #50b9cf",
                                        backgroundColor: "initial",
                                        backgroundImage: "linear-gradient(-180deg, rgb(0, 215, 117), rgb(0, 189, 104))"
                                    }}
                                    onClick={() => changeQuestionState(value)}>
                                    <p className='navItemText'>{value.id} </p>
                                </div>
                            )
                        else
                            return (
                                <div className='navGridItem ' key={value.id}   
                                style={{
                                    backgroundColor: "initial",
                                    backgroundImage: "linear-gradient(-180deg, rgb(0, 215, 117), rgb(0, 189, 104))"
                                }}
                                    onClick={() => changeQuestionState(value)}>
                                    <p className='navItemText'>{value.id} </p>
                                </div>
                            )
                    }
                    else
                        if (questionState.id === value.id) {
                            return (
                                <div className='navGridItem ' key={value.id}  ref={navGridContainerRef}
                                style={{
                                        outline: "3px solid #50b9cf"
                                    }}
                                    onClick={() => changeQuestionState(value)}>
                                    <p className='navItemText'>{value.id} </p>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className='navGridItem ' key={value.id} 

                                    onClick={() => changeQuestionState(value)}>
                                    <p className='navItemText'>{value.id} </p>
                                </div>
                            )

                        }
                })}
            </div>

        </>
    );
};

export default NavGrid;


