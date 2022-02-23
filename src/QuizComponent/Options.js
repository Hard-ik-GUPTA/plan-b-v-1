import React from 'react';
import { useState, useEffect } from 'react';

const Options = ({ data, questionState, setQuestionState }) => {
    const { id, name, img, selected } = questionState

    const selectedButtonStyle={
        backgroundColor: "initial",
    backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",

    }
    const [optionsArrayState, setOptionsArrayState] = useState(['A', 'B', 'C', 'D'])

    const [buttonStyleState, setButtonStyleState] = useState({
        backgroundColor: 'white'
    })

    const saveOption = (param) => {
        data[(questionState.id) - 1].selected = param

        setOptionsArrayState(['A', 'B', 'C', 'D'])
    }

    return (
        <>
            <div>
                {optionsArrayState.map((value) => {
                    // console.log(questionState.id, data[(questionState.id) -1].selected, value)
                    if (value === data[(questionState.id) -1].selected.value)

                        return <button key={value} onClick={() => saveOption({ value })} style={selectedButtonStyle} >{value}</button>
                    else
                        return (<button key={value} onClick={() => saveOption({ value })} style={{ buttonStyleState }}  >{value}</button>)
                })}


            </div>
        </>
    );
};

export default Options;
