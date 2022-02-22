import React from 'react';
import './quiz.css'

const NavGrid = ({ data, questionState, setQuestionState }) => {

    const changeQuestionState = (param) => {
        setQuestionState(param)

    }

    return (
        <>
            <div className='navGridContainer'>
                {data.map((value) => {

                    if (value.selected !== '') {
                        console.log(value.id);
                        if (questionState.id === value.id)

                            return (
                                <div className='navGridItem ' key={value.id}
                                    style={{
                                        outline: "2px solid black",
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
                                <div className='navGridItem ' key={value.id}
                                    style={{
                                        outline: "2px solid black"
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
