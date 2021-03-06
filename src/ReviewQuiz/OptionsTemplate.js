import React from 'react';
import { useState, useEffect } from 'react';

const OptionsTemplate = ({ data, questionState, setQuestionState }) => {

    const correctOptionStyle = {
        backgroundColor: "initial",
        backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",

    }
    const wrongOptionStyle = {
        background: "rgb(255,0,0)",
        backgroundImage: "rgb(255,0,0)"

    }
    const [optionsArrayState, setOptionsArrayState] = useState(['A', 'B', 'C', 'D'])

    const [buttonStyleState, setButtonStyleState] = useState({
        backgroundColor: 'white'
    })



    return (
        <>
            <div className='optionContainerGrid'>
                {optionsArrayState.map((value) => {
                    // console.log(questionState.id, data[(questionState.id) - 1].selected, value)
                    if (value === data[(questionState.id) - 1].answer)
                        return <button key={value} style={correctOptionStyle} >{value}</button>

                    else if (value === data[(questionState.id) - 1].selected.value)
                        return (<button key={value} style={wrongOptionStyle}  >{value}</button>)

                    else
                        return (<button key={value}   >{value}</button>)



                })}


            </div>
        </>
    );
};

export default OptionsTemplate;
