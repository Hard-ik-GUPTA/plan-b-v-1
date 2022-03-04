import React from 'react';
import '../QuizComponent/quiz.css'

const NavGridTemplate = ({ data, questionState, setQuestionState }) => {

    const changeQuestionState = (param) => {
        setQuestionState(param)

    }

    return (
        <>
            <div className='navGridContainer'>
                {data.map((value) => {

                    if (value.selected !== 'x') {
                        if (value.selected.value === value.answer)
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

                        else
                            if (questionState.id === value.id)
                                return (
                                    <div className='navGridItem ' key={value.id}
                                        style={{
                                            backgroundColor: "red",
                                            outline: "2px solid black"
                                        }}
                                        onClick={() => changeQuestionState(value)}>
                                        <p className='navItemText'>{value.id} </p>
                                    </div>
                                )
                            else
                                return (
                                    <div className='navGridItem ' key={value.id}
                                        style={{
                                            backgroundColor: "red",
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
                                        outline: "2px solid black",
                                       backgroundColor:"#0350cd"

                                    }}
                                    onClick={() => changeQuestionState(value)}>
                                    <p className='navItemText'>{value.id} </p>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className='navGridItem ' key={value.id}
                                    style={{
                                       backgroundColor: "#0350cd"
                                    }}
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

export default NavGridTemplate;
